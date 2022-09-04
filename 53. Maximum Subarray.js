var maxSubArray = function(nums) {
    var maxSum = nums[0];
    var nextSum = nums[0];
    for(let i = 1; i<nums.length; i++){
        nextSum = Math.max(nums[i], nextSum + nums[i])
        if(nextSum > maxSum){
            maxSum = nextSum
        }
        }
    return maxSum;
    
};
