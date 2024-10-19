const fs = require("fs");
const sharp = require("sharp");
const path = "./public/media/projects/";
const images = ["./public/media/me.webp"].concat(
  fs
    .readdirSync(path)
    .filter((img) => img.endsWith("webp") && !img.endsWith("w.webp"))
    .map((img) => path + img),
);
for (let imageName of images) {
  let sharp_image = sharp(imageName);
  sharp_image
    .metadata()
    .then(function (metadata) {
      for (let percent of [1, 0.75, 0.5, 0.25]) {
        let new_width = Math.round(metadata.width * percent);
        sharp_image.resize(new_width).toFile(`.${imageName.split(".")[1]}-${new_width}w.webp`);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
