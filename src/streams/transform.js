import { Transform, pipeline } from 'stream';
import { promisify } from 'util';

const pipelinePromise = promisify(pipeline)

const reverseTextTransform = new Transform({
    transform(chunk) {
        this.push(chunk.toString().split('').reverse().join(''))
    }
})

const transform = async () => {
    // Write your code here 

    await pipelinePromise(
        process.stdin,
        reverseTextTransform,
        process.stdout
    )
};

await transform();