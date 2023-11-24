function maxProfit(prices: number[]): number {
    let maxGain = 0
    let buyPrice = prices[0]

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buyPrice) {
            buyPrice = prices[i]
        } else {
            maxGain = Math.max(prices[i] - buyPrice, maxGain)
        }
    }

    return maxGain
};