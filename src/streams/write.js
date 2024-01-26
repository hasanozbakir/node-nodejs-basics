import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
    // Write your code here 

    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt')
    const stream = createWriteStream(filePath);

    process.stdin.on('data', (chunk) => {
        stream.write(chunk)
    })

    process.stdin.on('end', () => {
        stream.end()
    })

};

await write();