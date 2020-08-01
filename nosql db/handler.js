const { writeFile } = require('fs')
 
module.exports.update = (push_me) => {

    const file = require('./data.json')
    file.data.push(push_me)
    try{

        writeFile('./data.json', JSON.stringify(file), (e) => { if(e) return console.log(e) })

    }catch(err){ return console.log(err) }

}

module.exports.read = () => {

    const file = require('./data.json').data

    return file

}