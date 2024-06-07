/* QUESTION 1*/
let input = "Hello, World!";
function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
function printReversedStringAfterDelay(input) {
        setTimeout(() => {
        let reversedString = reverseString(input);
        console.log(reversedString);
    }, 2000);
}
printReversedStringAfterDelay(input);
/* QUESTION 2*/
let delayInSeconds = 3;
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
function countdownAndGenerateRandomNumber(delayInSeconds) {
    let remainingTime = delayInSeconds;
    let countdownInterval = setInterval(() => {
        if (remainingTime > 0) {
            console.log(`Time remaining: ${remainingTime} seconds`);
            remainingTime--;
        } else {
            clearInterval(countdownInterval);
            let randomNumber = generateRandomNumber();
            console.log(`Generated random number: ${randomNumber}`);
        }
    }, 1000);
}
countdownAndGenerateRandomNumber(delayInSeconds);
/* QUESTION 3*/
const exchangeRate = 80;
const storeInventory = {
    "apple": 1,
    "banana": 0.5,
    "orange": 0.75,
    "milk": 3,
    "bread": 2
};
function convertPricesToINR(inventory, exchangeRate) {
    const entries = Object.entries(inventory);
    const convertedEntries = entries.map(([item, priceInUSD]) => [item, priceInUSD * exchangeRate]);
     const convertedInventory = Object.fromEntries(convertedEntries);
    return convertedInventory;
}
const convertedStoreInventory = convertPricesToINR(storeInventory, exchangeRate);
console.log(convertedStoreInventory);
/*QUESTION 4*/
const books = [
    { title: "Book One", author: "john doe", year: 2008 },
    { title: "Book Two", author: "jane smith", year: 2012 },
    { title: "Book Three", author: "mary johnson", year: 2015 },
    { title: "Book Four", author: "james brown", year: 2005 },
    { title: "Book Five", author: "patricia davis", year: 2020 }
];
function capitalizeName(name) {
    return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
function filterAndCapitalizeBooks(books) {
    return books
        .filter(book => book.year > 2010)
        .map(book => ({
            ...book,
            author: capitalizeName(book.author)
        }));
}
const filteredBooks = filterAndCapitalizeBooks(books);
console.log(filteredBooks);
/*QUESTION 5*/
function validateURL(url) {
    const urlPattern = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-_]+\.[a-zA-Z]+$/;
    return urlPattern.test(url);
}
const urls = [
    "http://example.com",
    "https://example.com",
    "http://example",
    "ftp://example.com",
    "https://example123.com",
    "http://example-domain.com",
    "http://example_domain.com",
    "http://example.com/page",
    "https://example.com?query=1"
];
urls.forEach(url => {
    if (validateURL(url)) {
        console.log(`The URL "${url}" is valid.`);
    } else {
        console.log(`The URL "${url}" is invalid.`);
    }
});
/*QUESTION 6
function validateLinkedInURL(url) {
    const linkedInPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    return linkedInPattern.test(url);
}
const urls = [
    "https://www.linkedin.com/in/john-doe123",
    "https://www.linkedin.com/in/jane_smith",
    "https://www.linkedin.com/in/jack-12345",
    "http://www.linkedin.com/in/jane_smith",
    "https://www.linkedin.com/in/jo",
    "https://www.linkedin.com/in/jane_smith/",
    "https://www.linkedin.com/in/jane$mith",
    "https://www.linkedin.com/in/jane_smith12345678901234567890"
];

urls.forEach(url => {
    if (validateLinkedInURL(url)) {
        console.log(`The URL "${url}" is a valid LinkedIn profile URL.`);
    } else {
        console.log(`The URL "${url}" is not a valid LinkedIn profile URL.`);
    }
});
*/
