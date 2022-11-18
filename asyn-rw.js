const fs = require("fs");
console.log("Async file read start");
const async_result = fs.readFile(
  "./content/generic/text.txt",
  "utf-8",
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const first = result;
    console.log("First: ", first);
    console.log("done reading first file");

    fs.readFile("./content/generic/text2.txt", "utf-8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      const second = result;
      console.log("Second: ", second);
      console.log("done reading second file");
      fs.writeFile(
        "./content/generic/result-async.txt",
        `Async result: ${first}, ${second}`,
        (err, result) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("In Async write function");
          return result;
        }
      );
    });
  }
);
console.log("Outside async file read function");
