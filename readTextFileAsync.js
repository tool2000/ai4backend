const fs = require('fs')
console.log('시작.....')

fs.readFile('./news.txt', (err, data) =>{
    if (err) {
        console.log('Error...');
    }
    console.log('1번째, 읽어오기', data.toString())
} )

fs.readFile('./news.txt', (err, data) =>{
    if (err) {
        console.log('Error...');
    }
    console.log('2번째, 읽어오기', data.toString())
} )

fs.readFile('./news.txt', (err, data) =>{
    if (err) {
        console.log('Error...');
    }
    console.log('3번째, 읽어오기', data.toString())
} )

summary()