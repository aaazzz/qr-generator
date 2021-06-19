const express = require('express');
const fileUpload = require('express-fileupload');
const { v4: uuidv4 } = require('uuid');
const app = express();

// default options
app.use(fileUpload());
// static files
app.use(express.static('files'));

app.post('/upload', function(req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  const randString = uuidv4();
  uploadPath = __dirname + '/files/' + randString;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);

    res.status(200).json ({
      file: randString
    });
  });
});

app.listen(8888);
console.log('http://localhost:8888!');
