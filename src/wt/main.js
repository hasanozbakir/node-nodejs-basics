import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    // Write your code here

    const numCPUs = os.cpus().length
    const results = new Array(numCPUs)
    let completedWorkers = 0

    const createWorker = (workerIndex) => {
        const worker = new Worker(new URL('./worker.js', import.meta.url))
        worker.postMessage(10 + workerIndex)

        worker.on('message', (result) => {
            results[workerIndex] = result
            completedWorkers++

            if (completedWorkers === numCPUs) {
                console.log(results)
            }
        });

        worker.on('error', (err) => {
            results[workerIndex] = { status: 'error', data: null }
            completedWorkers++

            if (completedWorkers === numCPUs) {
                console.log(results)
            }
        })
    };

    for (let i = 0; i < numCPUs; i++) {
        createWorker(i);
    }
};

await performCalculations();