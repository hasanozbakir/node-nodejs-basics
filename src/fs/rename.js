import { rename as renamePath, access, constants } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    // Write your code here 

    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const wrongPath = path.join(__dirname, 'files', 'wrongFilename.txt')
    const properPath = path.join(__dirname, 'files', 'properFilename.md')

    try {
        await access(properPath, constants.F_OK)
        throw new Error('FS operation failed')
    } catch(err) {
        if(err.message === 'FS operation failed'){
            console.log(err.message)
            return
        }
    }

    try {
        await access(wrongPath, constants.F_OK)
    } catch {
        console.log('FS operation failed')
        return
    }

    try {
        renamePath(wrongPath, properPath)
    } catch {
        console('FS operation failed')
    }
};

await rename()



