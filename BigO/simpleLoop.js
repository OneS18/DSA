 const array1 = ['a','b','c','e']
 const array2 = ['x', 'y','j']

 const containCommonItem2 = (arr1, arr2) => {
     //loop through first array and create object where propreties === items in the array
     let map = {}
     for(let i = 0;i < arr1.length; i++) {
         if(!map[arr1[i]]) {
             const item = arr1[i]
             map[item] = true
         }
     }
     //loop through secound array and check if item in secound array exists on created object
     for(let j = 0; j < arr2.length; j++) {
         if (map[arr2[j]]) {
             return true
         }
     }
     return false
 }


 console.log(containCommonItem2(array1, array2))

 //O(a + b)


//more readable and simpler loop 
 const containCommonItem3 = (arr1,arr2) => {
     return arr1.some(item => arr2.include(item))
 }

 containCommonItem3(array1,array2)