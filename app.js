let defaultResponse = () => {
    setTimeout(() => {
        console.log('Response timeout!');
        process.exit();
    }, 2000);
}

let helloGeeks = () => {
    setTimeout(() => {
        console.log('Hello Geeks!');
    }, 6000);
}

defaultResponse();
helloGeeks();