/*
Given an integer array nums, return an array answer such that answer[i] is equal to the
product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Ex.1
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Ex.2
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

*/

//Solution 1: Compute the prefix, and suffix sums of each element and store them in thier own respectve arrays. Then on final pass computer pre[i-1]*suf[i+1]
var productExceptSelf = function(nums) {
    
    var pre = []
    var preSum = nums[0]
    pre.push(preSum)
    
    var post = []
    var postSum = nums[nums.length-1]
    post[nums.length-1] = postSum
   
    var sol = []
    
    for(let i=1; i<nums.length; i++){
        preSum = preSum*nums[i]
        pre[i] = preSum
    }
    for(let i=nums.length-2; i>=0; i--){
        postSum = postSum*nums[i]
        post[i] = postSum
    }
    sol[0] = 1*post[1]
    sol[nums.length-1] = 1*pre[nums.length-2]
    for(let i=1; i<nums.length-1; i++){
        sol[i] = pre[i-1] * post[i+1]
    }
    
     
    return sol
};
