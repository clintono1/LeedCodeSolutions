var isPalindrome = function(s) {
    
    var L = 0
    var R = s.length -1
    
    while(L < R){
        if( s[L].toLowerCase() == s[R].toLowerCase() ){
            L++
            R--
        }
        else if ( !isAlphaNum(s[L]) ){
            L++
        }
        else if (!isAlphaNum(s[R])){
            R--
        }
        else{
            return false
        }
    }
    return true
    
    
};
    
const isAlphaNum = (c) => {
    if(c >= '0' && c <= '9'){
        return true
    }
    else if (c >= 'a' && c <= 'z'){
        return true
    }
    else if(c >= 'A' && c <= 'Z'){
        return true
    }
    else{
        return false
    }
}
