const parseArgs = () => {
    // Write your code here 

    const args = process.argv.slice(2).reduce((arg, val, index) => {
        if(index % 2 === 0){
            return `${arg.replace("--", "")}${val.replace("--", "")}`
        } else {
            return `${arg} is ${val}\n`
        }
    }, "").trim()

    console.log(args)
    
};

parseArgs();