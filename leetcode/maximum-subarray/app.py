class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxNum = float("-inf")

        # 无穷小
        sum = 0
        for num in nums:
            if sum < 0:
                sum = 0
            sum += num
            maxNum = max(maxNum, sum)
        return maxNum
