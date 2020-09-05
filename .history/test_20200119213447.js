partials = fs.readdirSync('partials/')
    partials.forEach(partial => {
    name = partial.split('.'[0]);
    // html = fs.readFileSync('partials/' + partial)
    // handlebars.registerPartial(name, html)
} )
    console.log(partials)