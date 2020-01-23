fs = require('fs');

const readSettings = () => {
    return new Promise(resolve => {
        fs.readFileSync('settings.json')
    }) 


    try{
        return JSON.parse(fs.readFileSync('settings.json')) //look for json with settings, parse result string back to json
        } catch (e) {
            return {
            }
        } 
    } // catch error if there is no json

const writeSettings = data => {
    fs.writeFileSync('settings.json', JSON.stringify(data));
}   

module.exports = {
    readSettings,
    writeSettings
}