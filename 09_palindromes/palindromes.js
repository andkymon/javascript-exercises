const palindromes = function (str) {
    const array = str
    .toLowerCase()
    .split("")
    .filter((item) => item.match(/^[a-zA-Z0-9]+$/));

    return array.join("") === array.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
