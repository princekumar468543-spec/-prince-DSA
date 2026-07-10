var maxArea = function(height) { 

    let i = 0;
    let j = height.length-1;
     let maxarea = 0;
    while(i<j){
       let width = j - i ;

      let  minheight = Math.min(height[i],height[j])

      let area = width * minheight;

        maxarea = Math.max(maxarea, area);
      

      if(height[i]<height[j]){
        i++
      }else
        j--
      }
    

    return maxarea;
}
  
let height = [1,8,6,2,5,4,8,3,7];

console.log(maxArea(height));