 
var findMedianSortedArrays = function(nums1, nums2) {

    let result = [];

    for(let i = 0; i < nums1.length; i++){
        result.push(nums1[i]);
    }

    for(let j = 0; j < nums2.length; j++){
        result.push(nums2[j]);
    }

    result.sort((a, b) => a - b);

    let n = result.length;

    if(n % 2 !== 0){
        return result[Math.floor(n / 2)];
    } else {
        return (result[n / 2 - 1] + result[n / 2]) / 2;
    }
};