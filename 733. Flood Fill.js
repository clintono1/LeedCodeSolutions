var floodFill = function(image, sr, sc, color) {
    let m = image.length
    let n = image[0].length
    var q = []
    q.push([sr,sc])
    
    //We can do a BFS Traversal
    
    let start = image[sr][sc]
    if(start == color) return image
    
    
    
    while(q.length > 0){
        let pos = q.pop()
        let x = pos[0]
        let y = pos[1]
        image[x][y] = color
        
        if( x+1 < m && image[x+1][y] == start){
            q.push([x+1,y])
        }
        
        if( x-1 >= 0 && image[x-1][y] == start ){
            q.push([x-1,y])
        }
        if( y+1 < n && image[x][y+1] == start ){
            q.push([x,y+1])
        }
        if( y-1 >= 0 && image[x][y-1] == start ){
            q.push([x,y-1])
        }
        
    }
    
    return image
    
};
