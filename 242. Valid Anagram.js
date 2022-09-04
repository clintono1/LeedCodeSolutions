var isAnagram = function(s, t) {
    
    var arr = {}
    let size = 0
    
    for(let c of s){
        if(!arr[c]){
            arr[c] = 1
            size++
        }
        else{
            arr[c]++
        }
    }
    
    for(let c of t){
       if(!arr[c]){
           return false
       }
        else if(arr[c] == 1){
             delete arr[c]
            size--
        }
        else{
            arr[c]--
        }
    }
    
    //Time Complexity O(n + m) traverse both lists once
    //Space Complexity O(n + m) we add and the remove elements from the hasmap as we traverse.
    //if there are any elements in the map after were done then return false
    
    
    return size == 0
    
};
