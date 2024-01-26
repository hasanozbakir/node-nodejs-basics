import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const compress = async () => {
    // Write your code here 

    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const filePath = path.join(__dirname, 'files', 'fileToCompress.txt')
    const zipPath = path.join(__dirname, 'files', 'archive.gz')
    const source = createReadStream(filePath)
    const destination = createWriteStream(zipPath)
    const zip = createGzip()

    source.pipe(zip).pipe(destination)
};

await compress();