const fs = require("fs");
fs.readFile("./content/generic/text.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  fs.readFile("./content/generic/text2.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    fs.writeFile(
      "./content/generic/result-async.txt",
      `Async result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
        console.log(err);
        return result;
      }
    );
  });
});
