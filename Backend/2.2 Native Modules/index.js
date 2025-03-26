const fs = require("fs");

fs.readFile("message.txt","utf-8" , (err, data) => {
    if (err) throw err;
    console.log(data);
}); 
fs.appendFile('message.txt', ' \nThis is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });