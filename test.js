// const os = require("os")
// const path = require("path")

// console.log(__dirname);
// console.log(__filename);

// console.log(os.version())
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename)) //parse means read and understand , like destructuring, make it readable for datamaksin
//parse destructured it what is the dir name, shows like an object
// console.log(path.dirname(__filename))

// const https = require("http");

// https
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("Hello");
//   })
//   .listen(8080);

//CRUD

// const fs = require("fs");
// const path = require("path");

// fs.readFile("./starter.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// process.on("uncaughtException", (err, origin) => {
//   fs.writeSync(
//     process.stderr.fd,
//     `Caught exception: ${err}\n` + `Exception origin: ${origin}`
//   );
// });

//More upddated version
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "starter.txt"),
      "utf8"
    );
    console.log(data);

    await fsPromises.unlink(path.join(__dirname, "starter.txt"));

    await fsPromises.writeFile(path.join(__dirname, "promiseWrite.txt"), data);

    await fsPromises.appendFile(
      path.join(__dirname, "promiseWrite.txt"),
      ". This data has been added"
    );

    await fsPromises.rename(
      path.join(__dirname, "promiseWrite.txt"),
      path.join(__dirname, "newName.txt")
    );

    const newData = await fsPromises.readFile(
      path.join(__dirname, "newName.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
};

// fs.readFile(path.join(__dirname, "starter.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.writeFile(
//   path.join(__dirname, "Greeting.txt"),
//   "Hi there, hello!",
//   (err) => {
//     if (err) throw err;
//     console.log("Done writing the file");
//   }
// );

// fs.writeFile(
//   path.join(__dirname, "Appended.txt"),
//   "This is not a complete file",
//   (err) => {
//     if (err) throw err;
//     console.log("Appending done");
//   }
// );

process.on("uncaughtException", (err, origin) => {
  fs.writeSync(
    process.stderr.fd,
    `Caught exception: ${err}\n` + `Exception origin: ${origin}`
  );
});

fileOps();
