const fs = require('fs')


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData)


// Пишем/читаем данные в файл

// fs.writeFileSync('1-JSON.json', bookJSON)
const dataBuffer = fs.readFileSync('1-JSON.json')
const dataJSON = dataBuffer.toString()
let data = JSON.parse(dataJSON);

data.name = "Veronika";
data.age = 26;

fs.writeFileSync('1-JSON.json', JSON.stringify(data))

const data_read = JSON.parse(fs.readFileSync('1-JSON.json').toString());



console.log(data_read)

