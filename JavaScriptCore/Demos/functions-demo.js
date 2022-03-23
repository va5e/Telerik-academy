const sendMsgWithDate = (msg,date = new Date(),...recipients) => {
    for (const person of recipients){
        console.log(`To: ${person} - ${msg}: ${date.toLocaleDateString()}`);
    }
};

sendMsgWithDate('Hello world', undefined, 'John', 'Maria', 'Ivan');

