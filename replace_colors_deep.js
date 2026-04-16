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

    // Fix remaining reds
    content = content.replace(/#b91c1c/gi, 'rgb(var(--primary-dark))');
    content = content.replace(/#DC2626/gi, 'rgb(var(--primary))');

    // Fix white and black colors specifically for color and background properties
    content = content.replace(/color:\s*#fff(fff)?/gi, 'color: rgb(var(--foreground))');
    content = content.replace(/color:\s*#000(000)?/gi, 'color: rgb(var(--background))');
    
    content = content.replace(/background(-color)?:\s*#000(000)?/gi, 'background$1: rgb(var(--background))');
    content = content.replace(/background(-color)?:\s*#111(111)?/gi, 'background$1: rgb(var(--surface))');
    content = content.replace(/background(-color)?:\s*#222(222)?/gi, 'background$1: rgb(var(--surface))');

    // Fix rgba white usage (usually for borders, backgrounds with opacity)
    content = content.replace(/rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*([0-9.]+)\s*\)/g, 'rgba(var(--foreground), $1)');
    
    // Fix rgba black usage
    content = content.replace(/rgba\(\s*0\s*,\s*0\s*,\s*0\s*,\s*([0-9.]+)\s*\)/g, 'rgba(var(--background), $1)');

    // In TSX styles where strings are used
    content = content.replace(/'#fff'/gi, "'rgb(var(--foreground))'");
    content = content.replace(/'#000'/gi, "'rgb(var(--background))'");
    content = content.replace(/'#ffffff'/gi, "'rgb(var(--foreground))'");
    content = content.replace(/'#000000'/gi, "'rgb(var(--background))'");

    if (original !== content) {
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
}
console.log('Finished deep replacement!');
