import { readdir, access, constants } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    // Write your code here 

    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const filePath = path.join(__dirname, 'file')

    try {
        await access(filePath, constants.F_OK)
    } catch {
        try {
            throw new Error('FS operation failed')
        } catch(err) {
            console.log(err.message)
            return
        }
    }

    try {
        const files = await readdir(filePath)
        for (const file of files)
            console.log(file)
    } catch {
        console.error("FS operation failed ")
    }
};

await list();