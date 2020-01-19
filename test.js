const fs = require('fs');

partials = fs.readdirSync('partials/')
    partials.forEach(partial => {
    name = partial.split('.')[0];
    console.log(name);
    html = fs.readFileSync('partials/' + partial, 'utf-8')
    console.log(html)
    // html = fs.readFileSync('partials/' + partial)
    // handlebars.registerPartial(name, html)
} )
    console.log(partials)
    