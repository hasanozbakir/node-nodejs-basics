import { rm, access, constants } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    // Write your code here 

    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const filePath = path.join(__dirname,'files', 'fileToRemove.txt')

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

    try{
        await rm(filePath)
    } catch {
        console.log('FS operation failed')
    }
};

await remove();