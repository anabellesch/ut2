function duplicates(nums) {
    const counts = {};
    let duplicateCount = 0;

    for (let num of nums) {
        if (counts[num]) {
            if (counts[num] === 1) {
                duplicateCount++;
            }
            counts[num]++;
        } else {
            counts[num] = 1;
        }
    }

    console.log(duplicateCount);
}