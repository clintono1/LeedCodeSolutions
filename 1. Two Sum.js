var twoSum = function(nums, target) {
    
    //brute force method
    for(let i=0; i<nums.length; i++){ 
        for(j=i+1; j<nums.length; j++){
            //loop through every pair where i != j and add the sum
            let sum = nums[i] + nums[j]
            //if you find the sum then return the indicies
            if(sum == target){
                return [i,j]
            }
        }
    }
    //Time Complexity: O(n^2)
    //Space Complexity O(1)
    
    //hash map Solution
    var map = {}
    for(let c in nums){
        if(map[target - nums[c]]){
            return [map[target - nums[c]],c]
        }
        else{
            map[nums[c]] = c
        }
    }
    //Time Complexity: O(n)
    //Space Complexity O(n)
    
};

