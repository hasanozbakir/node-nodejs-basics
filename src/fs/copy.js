import fs, { access, constants } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
    // Write your code here 

    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const sourcePath = path.join(__dirname, 'files')
    const targetPath = path.join(__dirname, 'files_copy')

    try {
        await access(sourcePath, constants.F_OK)
    } catch {
        try {
            throw new Error('FS operation failed')
        } catch(err) {
            console.log(err.message)
            return
        }
    } 

    try {
        try {
            await access(targetPath, constants.F_OK)
            throw new Error('FS operation failed')
        } catch(err) {
            if(err.message === 'FS operation failed'){
                console.log(err.message)
                return
            }
        }

        // Create the destination directory
        await fs.mkdir(targetPath, { recursive: true })

        // Read all items in the source directory
        const items = await fs.readdir(sourcePath, { withFileTypes: true })

        for (const item of items) {
            const src = path.join(sourcePath, item.name)
            const target = path.join(targetPath, item.name)

            if (item.isDirectory()) {
                // If item is a directory, recursively copy it
                await copyDir(src, target)
            } else {
                // If item is a file, copy it
                await fs.copyFile(src, target)
            }
        }
    } catch(err) {
        console.log('FS operation failed')
    }
};

await copy();
