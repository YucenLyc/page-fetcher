// a node app that takes 2 command line arguments 
// 1. URL 2.local file path 
// it should download the resource at the URL to the local path on my machine. Once it's complete it should print out a message 

const request = require('request');
const fs = require('fs');

let args = process.argv.slice(2);
let url = args[0];
let location = args[1];

let filename = location.split("/".pop);
let filePath = location.replace('/' + filename, '');

if (fs.existsSync(filePath)) {
  request(url, (error, response, body) => {
    fs.writeFile(location, body, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log(`downloaded and save ${body.length} bytes to ${location}`);
      }
    });
  });
} else {
  console.log("Invalid Path");
}