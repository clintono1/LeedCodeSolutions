var search = function(nums, target) {
//     log n runtime complexity indicates binary search
    
//     Right Shift by Division
//     The right shift operation is similar to floor division by 
//     powers of two.

    let L = 0
    let R = nums.length-1
    
    
    while(L<=R){
        let mid = (L+R) >> 1
        
        if(nums[mid] == target) return mid
        
        if(nums[mid] < target){
            L = mid + 1
            
        }
        else{
            R = mid - 1
        }
        
    }
    
    return -1
};
