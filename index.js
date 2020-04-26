// const express = require('express')
const spawn = require('child_process').spawn;
const process = spawn('python', ['script.py']);

process.stdout.on('data', data => {
    console.log(data.toString());
});

// const app = express()
// const port = 3000

/* app.get('/', (req, res) => {

    var dataToSend;
    const python = spawn('python', ['script.py']);
    python.stdout.on('data', function (data) {
        console.log('Data from python script..');
        dataToSend = data.toString();
    });
    python.on('close', (code) => {
        console.log('child process close all stdio with code ${code}');
        res.send(dataToSend)
    });
})
app.listen(port, () => console.log('Example app listening on port ${port}!'))
*/