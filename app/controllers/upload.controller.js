var multer = require("multer");
const { uuid } = require("uuidv4");
const fs = require("fs");
const fetch = require("node-fetch");
const request = require("request");
var FormData = require("form-data");

const API_TOKEN = "d41a67437e354d3281533ee5ac146ea8";

function upload_file(api_token, path, cb) {
  console.log(`Uploading file: ${path}`);
  var req = request.post(
    "http://13.235.2.21:9000/asr?task=transcribe&language=en&encode=true&output=txt",
    function (err, resp, body) {
      if (err) {
        console.log("Error!");
        cb(null);
      } else {
        console.log("URL: " + body);
        cb(resp);
      }
    }
  );
  var form = req.form();
  form.append("audio_file", fs.createReadStream(path), {
    filename: "Recording.mp3",
    contentType: "audio/mp3",
  });
}

exports.upload = (req, res) => {
  filename = uuid() + ".mp3";
  console.log(filename);
  const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      cb(null, filename);
    },
  });
  var upload = multer({ storage: multerStorage }).single("audio");
  console.log("Upload a file", req.body);
  upload(req, res, async function (err) {
    if (err) {
      res.send(err);
    } else {
      upload_file(API_TOKEN, "uploads/" + filename, function (resp) {
        if (!resp) {
          console.error(new Error("Upload failed. Please try again."));
          fs.unlinkSync("uploads/" + filename);
          res.send(err);
        }
        //https://api.languagetoolplus.com/v2/check
        console.log("Sending Response");
        fs.unlinkSync("uploads/" + filename);
        res.send({ transcript: resp.body });
      });
    }
  });
};
