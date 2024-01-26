import fs, { access, constants } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    // Write your code here 

    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const filePath = path.join(__dirname, 'files', 'fresh.txt')
    const text ="I am fresh and young"
    const options= {encoding: 'utf8'}

    try {
        await access(filePath, constants.F_OK)
        throw new Error('FS operation failed')
    } catch(err) {
        if(err.message === 'FS operation failed'){
            console.log(err.message)
            return
        }
    }

    fs.writeFile(filePath, text, options, function(err){
        if(err){
            try {
                throw new Error('FS operation failed')
            } catch(err) {
                console.log(err.message)
                return
            }
        }
    })

};

await create();