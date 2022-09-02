var mergeTwoLists = function(list1, list2) {

//Recursive Solution
    
    const merge = (l1,l2) => {
        if(!l1){
            return l2
        } 
        else if(!l2){
            return l1
        }
        else if(l1.val < l2.val){
            l1.next = merge(l1.next,l2)
            return l1
        }
        else{
            l2.next = merge(l1,l2.next)
            return l2
        }
        
    }
    
    return merge(list1,list2)
    
    /*Time Complexity O(m + n) m = length of list one, and n = length of list two.
    * Space Complexity,O(m + n) Taking into consideration the call stack.
    *\
    
};


//Iterative Solution
var mergeTwoLists = function(list1, list2) {
    
    var dummyHead = new ListNode()
    var node = dummyHead
    
    while(list1 && list2){
        if(list1.val < list2.val){
            node.next = list1
            list1 = list1.next
        }
        else{
            node.next = list2
            list2 = list2.next
        }
        node = node.next
    }
    if(!list1){
        node.next = list2
    }
    else{
        node.next = list1
    }
    
    return dummyHead.next
};
