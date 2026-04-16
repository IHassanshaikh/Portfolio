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

    // Replace hardcoded primary red in rgba
    content = content.replace(/rgba\(\s*220\s*,\s*38\s*,\s*38\s*,/g, 'rgba(var(--primary),');
    content = content.replace(/rgba\(\s*200\s*,\s*30\s*,\s*30\s*,/g, 'rgba(var(--primary),');
    
    // Replace hardcoded dark backgrounds in rgba with surface or background
    // Covers 10,10,10 | 15,15,15 | 18,18,18 | 20,20,20 | 30,15,15 | 40,20,20 etc.
    content = content.replace(/rgba\(\s*1[0-9]\s*,\s*1[0-9]\s*,\s*1[0-9]\s*,/g, 'rgba(var(--background),');
    content = content.replace(/rgba\(\s*2[0-9]\s*,\s*[12][0-9]\s*,\s*[12][0-9]\s*,/g, 'rgba(var(--surface),');
    content = content.replace(/rgba\(\s*30\s*,\s*1[05]\s*,\s*1[05]\s*,/g, 'rgba(var(--surface),');
    content = content.replace(/rgba\(\s*40\s*,\s*20\s*,\s*20\s*,/g, 'rgba(var(--surface),');
    
    // Also, handle the case of rgb() without alpha for the same
    content = content.replace(/rgb\(\s*220\s*,\s*38\s*,\s*38\s*\)/g, 'rgb(var(--primary))');

    // Make sure we didn't miss "#000" in border colors or other properties
    // like border: 1px solid #000; -> border: 1px solid rgb(var(--border));
    content = content.replace(/border(-color)?:\s*[^;]*#000(000)?/gi, function(match) {
        return match.replace(/#000(000)?/gi, 'rgb(var(--border))');
    });

    if (original !== content) {
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
}
console.log('Finished rgba replacement!');
