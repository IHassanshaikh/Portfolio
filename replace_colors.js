const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walkDir(dir) {
    let filesList = [];
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            filesList = filesList.concat(walkDir(fullPath));
        } else {
            if (fullPath.endsWith('.css') || fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
                filesList.push(fullPath);
            }
        }
    }
    return filesList;
}

const filesToProcess = walkDir(srcDir);

for (const file of filesToProcess) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replace CSS colors
    // Case insensitive regex for #DC2626 and #ff4d4d
    content = content.replace(/#DC2626/gi, 'rgb(var(--primary))');
    content = content.replace(/#dc2626/gi, 'rgb(var(--primary))');
    content = content.replace(/#ff4d4d/gi, 'rgb(var(--primary))');

    // For hex values in CSS that define gradient (meaning rgb(...) might act up if not supported), they generally work fine in gradients like linear-gradient(..., rgb(var(--primary)))
    // For hex codes inside React style objects, replacing with 'rgb(var(--primary))' works fine

    if (original !== content) {
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
}
console.log('Done!');
