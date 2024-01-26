import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    // Write your code here 

    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt')

    const stream = createReadStream(filePath)
    stream.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
    
};

await read();