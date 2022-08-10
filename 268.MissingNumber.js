/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

Ex.

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in num


*/
//Solution : Calculate the Sum of the range and subtract the sum of the array.
var missingNumber1 = function(nums) {
    var n = nums.length
    var sum = 0 
    var numSum = 0
    for(let i=0; i<nums.length; i++){
        sum += n - i
    }
    
    for(let i=0; i<nums.length; i++){
        numSum += nums[i]
    }
    
    return sum - numSum
};
