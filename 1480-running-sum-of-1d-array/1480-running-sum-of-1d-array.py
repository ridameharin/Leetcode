class Solution(object):
    def runningSum(self, nums):
        total=0
        arr=[]
        for i in nums:
            total+=i
            arr.append(total)
        return arr

        