const fs = require('fs');
const path = require('path');

const tsxFile = path.join(__dirname, 'src/app/profile/page.tsx');
let tsxContent = fs.readFileSync(tsxFile, 'utf8');

tsxContent = tsxContent.replace(/background:\s*'#444'/g, "background: 'rgb(var(--surface))'");
tsxContent = tsxContent.replace(/background:\s*'#333'/g, "background: 'rgba(var(--foreground), 0.1)'");
tsxContent = tsxContent.replace(/background:\s*'#222'/g, "background: 'rgba(var(--foreground), 0.05)'");
tsxContent = tsxContent.replace(/background:\s*'linear-gradient\(135deg, #333, #222\)'/g, "background: 'rgba(var(--foreground), 0.05)'");
tsxContent = tsxContent.replace(/color:\s*'#efefef'/g, "color: 'rgb(var(--foreground))'");
tsxContent = tsxContent.replace(/color:\s*'#ccc'/g, "color: 'rgb(var(--muted))'");
tsxContent = tsxContent.replace(/color:\s*'#444'/g, "color: 'rgb(var(--muted))'");
tsxContent = tsxContent.replace(/border:\s*'1px solid #333'/g, "border: '1px solid rgba(var(--foreground), 0.1)'");
tsxContent = tsxContent.replace(/border:\s*'1.5px solid #333'/g, "border: '1.5px solid rgba(var(--foreground), 0.1)'");

fs.writeFileSync(tsxFile, tsxContent);

const cssFile = path.join(__dirname, 'src/app/profile/ProfilePage.css');
let cssContent = fs.readFileSync(cssFile, 'utf8');

cssContent = cssContent.replace(/color:\s*#efefef;/g, 'color: rgb(var(--foreground));');
cssContent = cssContent.replace(/color:\s*#aaa;/g, 'color: rgb(var(--muted));');
cssContent = cssContent.replace(/color:\s*#ccc;/g, 'color: rgb(var(--muted));');
cssContent = cssContent.replace(/background:\s*#333;/g, 'background: rgba(var(--foreground), 0.05);');
cssContent = cssContent.replace(/background:\s*#444;/g, 'background: rgba(var(--foreground), 0.1);');
cssContent = cssContent.replace(/border(-[a-z]+)?:\s*[0-9.]+px\s+solid\s+#333;/g, 'border$1: 1px solid rgba(var(--foreground), 0.1);');
cssContent = cssContent.replace(/border(-[a-z]+)?:\s*[0-9]+px\s+solid\s+#444;/g, 'border$1: 1px solid rgba(var(--foreground), 0.15);');
cssContent = cssContent.replace(/border:\s*4px\s+solid\s+#1b1b1b;/g, 'border: 4px solid rgb(var(--background));');
cssContent = cssContent.replace(/background:\s*#1b1b1b;/g, 'background: rgb(var(--surface));');
cssContent = cssContent.replace(/background:\s*linear-gradient\(135deg, #1d2226, #3b4249\);/g, 'background: rgba(var(--foreground), 0.1);');

fs.writeFileSync(cssFile, cssContent);

console.log('Fixed Profile Page Styles!');
