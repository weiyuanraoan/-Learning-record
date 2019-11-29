// [-2,1,-3,4,-1,2,1,-5,4]组成之后最大值。
// nums ,找到一个具有最大和的连续子数组（子数组中最小包含一个元素）
// 返回其最大值。

// 暴力破解法：从第一个数开始测试
function maxSubArray(nums) {
    let thissum, maxsum = -Number.MAX_VALUE
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            //每一趟的和是thissum
            //最大值更替
            thissum = 0;
            for (let k = i; k <= j; k++) {
                thissum += nums[k];
            }
            if (thissum > maxsum) {
                maxsum = thissum;
            }

        }
    }
    return (maxsum);
}
console.log(maxSubArray([1, 1, -3, 4, -1, 2, 1, -5, 4]));