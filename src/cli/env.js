const parseEnv = () => {
    // Write your code here 

    const pref = 'RSS_'
    const envVars = Object.keys(process.env)
        .filter(key => key.startsWith(pref))
        .map(key => `${key}=${process.env[key]}`)
        .join('; ');
    
    console.log(envVars)
};

parseEnv();