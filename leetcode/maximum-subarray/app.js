// o(n2)->0(n)
function maxSubArray(nums) {
    var max = -Number.MAX_VALUE;
    var sum = 0;
    for (let num of nums) {
        if (sum < 0) { //加了跟每加一样
            sum = 0;
        }
        sum += num;
        //加到了什么从下一个开始 放弃之前的数
        max = Math.max(max, sum);
    }
    return max;
}
console.log(maxSubArray([1, 1, -3, 4, -1, 2, 1, -5, 4]));