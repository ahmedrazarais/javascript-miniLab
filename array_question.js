
// for a given array [250,645,300,900,50] all items have an offer of 10% on them.change the
//array to store final price after applying offer.


let prices = [250, 645, 300, 900, 50];

for (let i = 0; i < prices.length; i++) {
    let offer = prices[i] * 0.1; // 10% of the current price
    prices[i] -= offer; // Update the value in the same list
}

console.log("After applying the offer, the array is:", prices);
