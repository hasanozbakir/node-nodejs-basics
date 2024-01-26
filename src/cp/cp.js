import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
    // Write your code here

    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const filePath = path.join(__dirname, 'files', 'script.js')

    const child = spawn('node', [filePath, ...args], {
        stdio: ['pipe', 'pipe', process.stderr, 'ipc']
    })

    process.stdin.pipe(child.stdin)

    child.stdout.on('data', (data) => {
        process.stdout.write(data);
    })

    child.on('error', (error) => {
        console.error('Error in child process:', error);
    })

    child.on('close', (code) => {
        console.log(`Child process exited with code ${code}`);
    })
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */ ['arg1', 'arg2']);
