const fs = require('fs');

for(let index = 5; index < 30; index++) {
    fs.open(`day${index}.js`, 'w', function (err, file) {
        if (err) throw err;
        console.log('File Created!');
      });
}