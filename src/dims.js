function logger(string) {
    let reverseString = string.split("")
    .reverse()
    .join("");
    console.log(reverseString);
}

module.exports = logger;
