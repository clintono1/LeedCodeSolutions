var maxProfit = function(prices) {
    var min = prices[0]
    var profit = 0
    var maxP = 0
    
    for(let i=0; i<prices.length; i++){
        min = Math.min(min,prices[i])
        profit = prices[i] - min
        maxP = Math.max(profit,maxP)
    }
    //Time Complexity: O(n)
    //Space Complexity: O(1)
    
    return maxP
};
