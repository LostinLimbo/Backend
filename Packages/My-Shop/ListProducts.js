// Use a package to print a randomized menu of products and a price to go with into the console!

var faker = require("faker/locale/en_GB")
console.log("==================");
console.log("Welcome to my Shop");
console.log("==================");

for(i = 1; i <= 10; i++){
 // console.log(faker.fake("{{commerce.productAdjective}} {{commerce.productMaterial}} {{commerce.product}} - £{{commerce.price}}"));
 console.log(faker.commerce.productName() + " - £" + faker.commerce.price());
}
