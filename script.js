console.log("Hello from script.js");

const tags = ["spicy", "bold", "savory"];
const prices = [15.5, 4.5, 20, 24.5];

console.log(tags);
console.log(prices);

const tagtext = document.querySelector("#tags");
tagtext.textContent = "";
for (let i = 0; i < tags.length; i++) {
    tagtext.textContent = tagtext.textContent + tags[i] + " . ";
}

let total = 0;
for (let i = 0; i <prices.length; i++) {
    total = total + prices[i];
}
document.querySelector("#total").textContent = "$" + total;