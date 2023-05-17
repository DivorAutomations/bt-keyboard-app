const express = require('express')
const router = express.Router()
const SerialPort = require('serialport').SerialPort;
const Readline = require('@serialport/parser-readline').ReadlineParser;

// Configure the serial port
const port = new SerialPort({
    path: 'COM4',
    baudRate: 115200
});

const parser = port.pipe(new Readline({ delimiter: '\r\n' }));


router.get('/', (req, res) => {
    try {
        res.render('index')
    } catch (error) {
        console.error(error)
    }
})

router.get('/send-data-on', (req, res) => {
    const dataToSend = 'a';
    //Write data to serial port
    port.write(dataToSend, (err) => {
        if (err) {
            console.error('Error sending data:', err.message);
            res.status(500).send('Error sending data');
        } else {
            console.log('Data sent:', dataToSend);
            res.redirect('/');
        }
    })
})

router.get('/send-data-off', (req, res) => {
    const dataToSend = 'b';
    //Write data to serial port
    port.write(dataToSend, (err) => {
        if (err) {
            console.error('Error sending data:', err.message);
            res.status(500).send('Error sending data');
        } else {
            console.log('Data sent:', dataToSend);
            res.redirect('/');
        }
    })
})

module.exports = router