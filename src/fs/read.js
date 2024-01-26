import { readFile, access, constants } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    // Write your code here 

    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt')

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
        const text = await readFile(filePath, 'utf8')
        console.log(text);
    } catch {
        console.error('FS operation failed')
    }
};

await read();