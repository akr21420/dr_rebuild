const request = require("request-promise");
var cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});
const sendData = async (req, res) => {
  let data = { url: imgurl };
  var options = {
    method: "POST",
    uri: "http://13.127.205.10:8000/",
    body: data,
    json: true,
  };
  await request(options)
    .then((data) => {
      console.log(data);
      //   res.json(data);
      res.render("predict_landing", { values: JSON.stringify(data) });
    })
    .catch((err) => {
      console.log(err);
    });
};

const delImg = async (req, res) => {
  const CLOUDINARY_REGEX =
    /^.+\.cloudinary\.com\/(?:[^\/]+\/)(?:(image|video)\/)?(?:(upload|fetch)\/)?(?:(?:[^_/]+_[^,/]+,?)*\/)?(?:v(\d+|\w{1,2})\/)?([^\.^\s]+)(?:\.(.+))?$/;
  const matches = CLOUDINARY_REGEX.exec(imgurl);
  console.log(matches[4]);
  await cloudinary.uploader.destroy(matches[4], function (result) {
    console.log(result);
    res.redirect("/img");
  });
};
module.exports = { sendData, delImg };
