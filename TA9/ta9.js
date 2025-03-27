function getOdds(nums) {
    const odds = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            odds.push(nums[i]);
        }
    }
    return odds;
}