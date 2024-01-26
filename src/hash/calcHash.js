import crypto from 'crypto';
import fs from 'fs';
import { promisify } from 'util';
import stream from 'stream';
import path from 'path';
import { fileURLToPath } from 'url';

const pipeline = promisify(stream.pipeline)

const calculateHash = async () => {
    // Write your code here 

    const hash = crypto.createHash('sha256')

    const __dirname = path.dirname(fileURLToPath(import.meta.url))

    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')

    const readStream = fs.createReadStream(filePath)

    await pipeline(readStream, hash)

    const hashHex = hash.digest('hex')
    console.log(hashHex)
};

await calculateHash();