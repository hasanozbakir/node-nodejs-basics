import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const decompress = async () => {
    // Write your code here 

    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const zipPath = path.join(__dirname, 'files', 'archive.gz')
    const filePath = path.join(__dirname, 'files', 'fileToCompress.txt')
    const source = createReadStream(zipPath)
    const destination = createWriteStream(filePath)
    const unzip = createGunzip()

    source.pipe(unzip).pipe(destination)

};

await decompress();