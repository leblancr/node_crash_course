const fs = require('fs')

fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data.toString())
})

// write file
fs.writeFile('./docs/blog2.txt', 'hello world', () => {
    console.log('file blog2.txt written')
})


// directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder ./assets created')
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder ./assets deleted')
    })
}

// delete files
if (fs.existsSync('./docs/deleteme.txt')) {
    //console.log('file exists')
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleteme.txt deleted')
    })
} else {
    //console.log('file doesnt exist, creating')
    fs.writeFile('./docs/deleteme.txt', 'hello world', () => {
        console.log('file deleteme.txt created')
    })
}