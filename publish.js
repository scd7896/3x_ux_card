const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");

const s3 = new AWS.S3({
	region: "ap-northeast-2",
	accessKeyId: process.env.AWS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const contentType = {
	png: "image/png",
	html: "text/html",
	json: "application/json",
	txt: "text/plain",
	css: "text/css",
	js: "application/javascript",
};

const uploadDir = function (s3Path, bucketName) {
	function walkSync(currentDirPath, callback) {
		fs.readdirSync(currentDirPath).forEach(function (name) {
			var filePath = path.join(currentDirPath, name);
			var stat = fs.statSync(filePath);
			if (stat.isFile()) {
				callback(filePath, stat);
			} else if (stat.isDirectory()) {
				walkSync(filePath, callback);
			}
		});
	}

	walkSync(s3Path, function (filePath, stat) {
		let bucketPath = filePath.substring(s3Path.length + 1);
		const type = filePath.split(".").pop();
		let params = {
			Bucket: bucketName,
			Key: bucketPath,
			Body: fs.readFileSync(filePath),
			ContentType: `${contentType[type]}; charset=utf8` || "text/plain",
		};

		s3.putObject(params, function (err, data) {
			if (err) {
				console.log(err);
			} else {
				console.log("Successfully uploaded " + bucketPath + " to " + bucketName);
			}
		});
	});
};

s3.listObjects({ Bucket: "3xuxcard" }, (err, data) => {
	s3.deleteObjects(
		{
			Bucket: "3xuxcard",
			Delete: {
				Objects: data.Contents.map(({ Key }) => ({ Key })),
			},
		},
		(err, data) => {
			uploadDir(path.join(__dirname, "out"), "3xuxcard");
		}
	);
});
