var isValid = function(s) {
    
    var stack = []
    

    for(let c of s){
        let len = stack.length-1
        if(c == ')' && stack[len] == '('){
            stack.pop()
        }
        else if (c == '}' && stack[len] == '{'){
            stack.pop()
        }
        else if (c == ']' && stack[len] == '['){
            stack.pop()
        }
        else{
            stack.push(c)
        }
    }
    
    return (stack.length == 0)
  
  //Time Complexity O(n)
  //Space Complexity O(n)
    
};
