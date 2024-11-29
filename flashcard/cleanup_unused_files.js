const fs = require('fs');
const path = require('path');

// Define the directory to scan and file extensions
const projectDir = path.join(__dirname, 'src');
const allowedExtensions = ['.js', '.jsx', '.css', '.scss', '.png', '.jpg'];
const ignoreDirs = ['node_modules', 'build', '.git'];

// Function to recursively scan directories for specific file types
function getAllFiles(dirPath, extensions, ignoreList, fileList = []) {
    fs.readdirSync(dirPath).forEach(file => {
        const fullPath = path.join(dirPath, file);

        // Skip ignored directories
        if (fs.statSync(fullPath).isDirectory()) {
            if (!ignoreList.includes(file)) {
                getAllFiles(fullPath, extensions, ignoreList, fileList);
            }
        } else if (extensions.some(ext => file.endsWith(ext))) {
            fileList.push(fullPath);
        }
    });

    return fileList;
}

// Function to find references in JS/JSX files
function findUsedFiles(baseDir, allFiles) {
    const usedFiles = new Set();

    allFiles.forEach(file => {
        if (file.endsWith('.js') || file.endsWith('.jsx')) {
            const content = fs.readFileSync(file, 'utf-8');
            allFiles.forEach(f => {
                const relativePath = path.relative(baseDir, f);
                const normalizedPath = relativePath.replace(/\\/g, '/'); // For Windows compatibility
                if (content.includes(normalizedPath)) {
                    usedFiles.add(f);
                }
            });
        }
    });

    return usedFiles;
}

// Function to scan and delete unused files
function scanAndDeleteUnusedFiles() {
    console.log('Scanning for unused files...');
    const allFiles = getAllFiles(projectDir, allowedExtensions, ignoreDirs);
    console.log(`Found ${allFiles.length} files to scan.`);

    const usedFiles = findUsedFiles(projectDir, allFiles);
    const unusedFiles = allFiles.filter(file => !usedFiles.has(file));

    console.log(`Unused files detected: ${unusedFiles.length}`);

    // Automatically delete unused files
    unusedFiles.forEach(file => {
        try {
            fs.unlinkSync(file);
            console.log(`Deleted: ${file}`);
        } catch (err) {
            console.error(`Failed to delete ${file}:`, err);
        }
    });

    console.log('Unused file cleanup completed.');
}

// Execute the scan and delete process
scanAndDeleteUnusedFiles();
