fs = require('fs');

const readSettings = () => {
    try{
        return JSON.parse(fs.readFileSync('settings.json')) //look for json with settings, parse result string back to json
        } catch (e) {
            return {
            }
        } 
    } // catch error if there is no json

    
module.exports = {
    readSettings
}