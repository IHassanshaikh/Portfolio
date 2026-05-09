const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const publicDir = path.join(__dirname, 'public');

// Recursively get all .tsx, .ts, .jsx, .js files
function getSourceFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getSourceFiles(filePath, fileList);
        } else if (/\.(tsx|ts|jsx|js)$/.test(file)) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const sourceFiles = getSourceFiles(srcDir);

// Build an index of all files in public/assets (key: filename without extension, value: full relative path)
// Actually we need the directory and basename to be safe.
const availableAssets = new Map();
function indexAssets(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            indexAssets(filePath);
        } else {
            const relPath = path.relative(publicDir, filePath).replace(/\\/g, '/'); // e.g. assets/logos/file.jfif
            const parsed = path.parse(relPath);
            const key = parsed.dir + '/' + parsed.name; // e.g. assets/logos/file
            // We store the correct full extension path
            availableAssets.set(key, relPath);
        }
    }
}
indexAssets(path.join(publicDir, 'assets'));

let totalReplacements = 0;

for (const file of sourceFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let hasChanges = false;

    // Use regex to find things that look like '/assets/...' or 'assets/...' followed by common extensions
    // Note: We'll replace the full match with the correctly extension'd string
    const assetRegex = /(['"`])(\/?assets\/[^'"`]+?\.(?:png|jpe?g|svg|webp|gif|jfif|JPG))(['"`])/gi;
    
    content = content.replace(assetRegex, (match, p1, p2, p3) => {
        // p2 is like '/assets/logos/logo.png'
        const isAbsolute = p2.startsWith('/');
        const normalizedP2 = isAbsolute ? p2.slice(1) : p2; // becomes 'assets/logos/logo.png'
        
        const parsed = path.parse(normalizedP2);
        const key = parsed.dir + '/' + parsed.name; // 'assets/logos/logo'
        
        // If the file exists exactly as is, don't change
        const absolutePathCheck = path.join(publicDir, normalizedP2);
        if (fs.existsSync(absolutePathCheck)) {
            return match;
        }

        // Try to find if there is an existing file with the same name but different format
        if (availableAssets.has(key)) {
            const correctPath = availableAssets.get(key); // e.g. 'assets/logos/logo.jfif'
            const newString = isAbsolute ? '/' + correctPath : correctPath;
            if (newString !== p2) {
                console.log(`Updated in ${path.basename(file)}: ${p2} -> ${newString}`);
                hasChanges = true;
                totalReplacements++;
                return p1 + newString + p3;
            }
        }
        return match;
    });

    if (hasChanges) {
        fs.writeFileSync(file, content, 'utf8');
    }
}

console.log(`\nFinished! Total replacements made: ${totalReplacements}`);
