fs = require('fs');

const readSettings = () => {
    return new Promise(resolve => {
        fs.readFileSync('settings.json', 'utf-8', (err, data) => {
        if (!err) {
            resolve(JSON.parse(data));
        }else {
            resolve({});
        }
        });
    }) 
}

const writeSettings = data => {
    fs.writeFileSync('settings.json', JSON.stringify(data));
}   

module.exports = {
    readSettings,
    writeSettings
}