let nums = [1, 2, 3, 4, 5, 6];
let target = 7;
function twosum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let remain = target - nums[i];
    if (map[remain] !== undefined) {
      return [map[remain], i];
    }

    map[nums[i]] = i;
  }
}

console.log(twosum(nums, target));

let nums2 = [9, 6, 8, 9, 5];
let target2 = 17;

function twosum(nums2, target2) {

  let map = {};

  for(let i = 0; i < nums2.length; i++) {

    let remain = target2 - nums2[i];

    if(map[remain] !== undefined) {
      return [map[remain], i];
    }

    map[nums2[i]] = i;
  }
}

console.log(twosum(nums2, target2));



let numss = [1, 2, 2, 3, 4, 4, 5];

let unique = [...new Set(numss)];

console.log(unique);

let arr = [1, 1, 2, 2, 3, 4, 4];

let j = 0;

for (let i = 1; i < arr.length; i++) {

  if (arr[i] !== arr[j]) {
    j++;
    arr[j] = arr[i];
  }

}

console.log(arr.slice(0, j + 1));