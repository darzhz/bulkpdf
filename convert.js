const imgToPDF = require('image-to-pdf')
const fs = require('fs')
const path = require('path')
const image = "./img";
const pdf = "./pdf";
let images = [];
fs.readdir("./img", (err, files) => {
  files.forEach(file => {
    images.push(file.toString());
	});
	console.log(images.length+" images detected!");
	batchProcess();
});
function batchProcess(){
images.forEach((file)=>{
imgToPDF([path.join(__dirname,`/img/${file}`)],imgToPDF.sizes.A4).pipe(fs.createWriteStream(path.join(__dirname,`/pdf/${file.replace("jpg","pdf")}`)
))
console.log(file.replace("jpg","pdf")+" successfully converted");
});
console.log("files located at pdf folder");
}
