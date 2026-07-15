var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return""
   let st = strs[0]

   let common = ""

   for(let i = 0 ; i<st.length ; i++){


      for(let j = 1 ; j<strs.length ; j++){
        if(st[i]!== strs[j][i]){
            return common;
        }
        
      }
        common += st[i];

   }


   return common;

 

};

var longestCommonPrefix = function(strs) {

     let st = strs[0];
     let common  = ""

     for(let i = 0 ; i<st.length ; i++){

        for(let j = 1 ; j<strs.length ; j++){

            if(st[i]!== strs[j][i]){
                return common
            }

          
        }

         common += st[i]
     }

     return common;
}


var commonPrefix = function(strs){
    let common = ""
    let St = strs[0];
    for(let i = 0 ; i < St.length ; i++){
       

        for(let j = 1 ;j < strs.length ; j++){
            if(St[i]!== strs[j][i]){
                return common ;
            }
        }

        common += St[i]
    }

    return common
}