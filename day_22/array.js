// let arr1=[1,2,3,4,5,6,'hello'];
// console.log(arr1);
// //arr1.splice(5);// removes all elements from index 5 to end of array
// // console.log(arr1);//[]
// // arr1.splice(4,2);// removes 2 element from index 4 to end of array
// // console.log(arr1);//[ 1, 2, 3, 4 ,'hello' ]
// // arr1.splice(2,0,'bye','hi')// adds 2 element at index 2
// // console.log(arr1);
// arr1.splice(2,2,'bye','hi')// removes 2 element from index 2 and adds 2 element at index 2
// console.log(arr1);


//some() method
 let arr1=[1,2,3,4,5,6,'hello'];
let output=arr1.some(
    (e)=>e%2==0//even numbers
)
console.log(output);//true

/*
 findIndex() method
 The findIndex() method returns the index of the 
 first element in the array that satisfies the 
 provided testing function. If no values satisfy the testing function,
-1 is returned.
syntax:
array.findIndex(callback(element[, index[, array]])[, thisArg])
*/
let arr2=[1,20,3,4,5,6,'hello'];
let output2=arr2.findIndex(
    (e)=>e%2==0//even numbers
)
console.log(output2);//1

/**
 * reverse() method
 * The reverse() method reverses the elements of an array in place.
 *     -it reverse the original array
 *     -it returns the reference to the same array, now modified.
 * 
 */
let arr3=[1,2,3,4,5,6,'hello'];
console.log(arr3);
let output3=arr3.reverse()
console.log(output3);
console.log(arr3);//[ 'hello', 6, 5, 4, 3, 2, 1 ]

/**
 * toString() method
 *      * The toString() method returns a string representing the
 *           specified array and its elements.
 *      * The toString() method does not change the original array.
 *      * returns string with comma separated values.
 */
let arr4=[10,20,30];
let output4=arr4.toString();
console.log(arr4);//[ 10, 20, 30 ]
console.log(output4);//10,20,30
console.log(typeof output4);//string

let arr5=['hello','world','hi'];
let output5=arr5.toString();
console.log(arr5);//[ 'hello', 'world', 'hi' ]
console.log(output5);//hello,world,hi

/**
 * join() method
 * The join() method creates and returns a new string by
 *     concatenating all of the elements in an array (or an array-like object),
 *     separated by commas or a specified separator string.
 *  * The join() method does not change the original array.
 *  * The join() method returns a string.
 */

let arr6=[10,20,30];
let output6=arr6.join('-😊');
console.log(output6);

/**
 * slice() method
 *  -The slice() method returns a shallow copy of a
 *  portion of an array into a new array object selected
 *  from start to end (end not included) where start and
 *  end represent the index of items in that array.
 *  -The original array will not be modified.
 * syntax:
 * array.slice(start, end)
 *  start: it is used to specify the starting index
 *  end: it is used to specify the ending index(exclusive)(optional)
 * 
 */
let arr7=[10,20,30,40,50,60];
let output7=arr7.slice(2,4);//[30,40]
console.log(output7);//[ 30, 40 ]
console.log(arr7.slice(3));//[ 40, 50, 60 ]

/**
 * forEach() method
 *    -The forEach() method executes a provided function once
 *    for each array element.
 *    -it works like looping through the array elements.
 *    -The forEach() method does not return a value.
 *syntax:
        arr.forEach(
            (currentValue, index, array) => {
                // code block
            }
 */

let arr8=[10,20,30,40,50,60];
arr8.forEach(
    (element,index,array)=>{
        console.log(`element: ${element} `);
        console.log('square of element:',element*element);
        
    }
)

/**
 * for of loop
 *    -The for...of statement creates a loop iterating over
 *    iterable objects, including: typed sets, arrays, strings, etc.
 *  syntax:
 *    for(let element of array){
 * *      //code block
 *    } 
 *  
 */
let arr9=[10,20,30,40,50,60];
        for(let element of arr9){
            console.log(element);    
        }

        for(let index in arr9){
            console.log(index,' - ',arr9[index]);
            
        }


/**
 * indexOf() method
 *     -  The indexOf() method returns the first index at
 *         which a given element can be found in the array,
 *         or -1 if it is not present.
 * syntax:
 * array.indexOf(searchElement, fromIndex)
 * searchElement: The value to search for.
 * fromIndex: The index at which to begin the search.(default is 0)(optional)
 */

let arr10=[10,20,30,40,50,60];
let output10=arr10.indexOf(20);//1
console.log(arr10.indexOf(100));//-1
console.log(arr10.indexOf(100,0));//-1


/**
 * delete
 *    - The delete operator removes a property from an object/array.
 *    - it deletes the value but not the key/index position
 *    - it returns true if the property is deleted, otherwise false
 */
let arr11=[10,20,30,40,50,60];
delete arr11[1];
console.log(arr11);//[ 10, <1 empty item>, 30, 40, 50, 60 ]


/**
 * fill()
 *    - The fill() method changes all elements in an array 
 *      to a static value,and returns the modified array.
 *    - it changes the original array
 *    - it returns the modified array
 * syntax:
 *     array.fill(value, start, end)
 * value: The value to fill the array with.
 * start: The starting index.(default is 0)(optional)
 * end: The ending index.(default is the length of the array)(optional)
       (exclusive) 
*/
let arr12=[10,20,30,40,50,60];
arr12.fill(100);//[ 100, 100, 100, 100, 100, 100 ]
console.log(arr12);
arr12.fill(100,5)//[ 10, 20, 30, 40, 100, 100 ]
arr12.fill(200,3,5)//[ 10, 20, 30, 200, 200, 60 ]

/**
 * padStart()
 *     - The padStart() method pads the current string with
 *       another string (multiple times) until it reaches the
 *       specified length.
 *     - it does not change the original string
 *     - it returns the padded string
 *     - it starts padding from left side
 * padEnd()
 *     - The padEnd() method pads the current string with
 *       another string (multiple times) until it reaches the
 *       specified length.
 *      - it does not change the original string
 *      - it returns the padded string
 *      - it starts padding from right side
 * syntax:
 *     string.padStart(targetLength, padString)
 * targetLength: The length of the string to pad to.
 * padString: The string to pad the current string with.
 *            (default is ' ')(optional)
 */

let str1='hello';
console.log(str1.padStart(10,'*'));//*****hello
console.log(str1.padEnd(10,'*'));//hello*****

/*
* trimStart() -it removes the space from the left side
* trimEnd()   -it removes the space from the right side
* trim()      -it removes the space from both sides
* 
*/
let str2='   hello   ';
console.log(str2.length);//11
str2.trimStart();
console.log(str2.length);//8
console.log(str2);//hello
str2.trimEnd();
console.log(str2.length);//5

/**
 * sort()
 *    - The sort() method sorts the elements of an array
 *      in place and returns the sorted array.
 *    - it changes the original array
 *    - it returns the sorted array
 * syntax:
 *     array.sort([compareFunction])
 * compareFunction: A function that defines the sort order.
 *                  (optional)
 *                   (default is ascending order)
 */

let arr13=[10,40,20,30,60,40];
arr13.sort();
console.log(arr13);//[ 10, 20, 30, 40, 40, 60 ]

/**
 * reduceRight()
 *     - The reduceRight() method applies a function against
 *       an accumulator and each value of the array (from right
 *       to left) to reduce it to a single value.
 *     - it changes the original array
 *     - it returns the reduced value
 * syntax:
 *     array.reduceRight(
 *         (accumulator, currentValue, currentIndex, array) => {
 *             // code block
 *         }
 *     )
 * accumulator: The value accumulated thus far.
 * currentValue: The current element being processed in the array.
 */

let arr14=['welcome' , 'to' , 'session'];
arr14.reduceRight(
    (accumulator, currentValue, currentIndex, array) => {
        return accumulator+' '+currentValue;
    }
)
console.log(arr14);//[ 'welcome', 'to', 'session' ]


/**
 * lastIndexOf()
 *     - The lastIndexOf() method returns the last index
 *       at which a given element can be found in the array,
 *       or -1 if it is not present.
 *     - it returns the index
 *     - it returns -1 if the element is not found
 * syntax:
 *     array.lastIndexOf(searchElement, fromIndex)
 * searchElement: The element to locate in the array.
 * fromIndex: The index at which to start the search.
 */

let arr15=[10,20,30,40,50,60,10];
console.log(arr15.lastIndexOf(10));//6
console.log(arr15.indexOf(10));//0

/**
 * copyWithin()
 *     - The copyWithin() method shallow copies part of an
 *       array to another location in the same array and
 *       returns it, without modifying its length.
 *     - it changes the original array
 *     - it returns the modified array
 * syntax:
 *     array.copyWithin(target, start, end)
 * target: The index to copy the array to.
 * start: The index to start copying from.
 * end: The index to stop copying (exclusive).
 */


let arr16=[10,20,30,40,50,60];
arr16.copyWithin(4,0,3);//[ 10, 20, 30, 40, 10, 20 ]
console.log(arr16);
/**
 * repeat()
 *     - The repeat() method creates a new string by
 *       repeating the string n times.
 *     - it returns the repeated string
 * syntax:
 *     string.repeat(count)
 * count: The number of times to repeat the string.
 */
let str3='hello';
console.log(str3.repeat(3));//hellohellohello

/**
 * split()
 *     - The split() method splits a string into an array
 *       of substrings, and returns the new array.
 *     - it returns the new array
 *     - it does not change the original string
 * syntax:
 *     string.split(separator, limit)
 * separator: The separator to use to split the string.
 * limit: The maximum number of substrings to return.
 *        (optional)
 */

let str4='hellohellohello';
console.log(str4.split('h'));

/**
 * subString()
 *     - The substring() method returns the characters
 *       within a range of indices in a string.
 *     - it returns the substring
 *     - it does not change the original string
 * syntax:
 *     string.substring(start, end)
 * start: The starting index (inclusive).
 * end: The ending index (exclusive).
 */
let str5='hello';
console.log(str5);
console.log(str5[0]);
console.log(str5.substring(2,4));
console.log(str5.replace('e','ee'));
console.log(str5.substr(2,4));//deprecated

/**
 * replace()
 *     - The replace() method returns a new string
 *       with some or all matches of a pattern replaced
 *       by a replacement.
 *     - it returns the new string
 *     - it does not change the original string
 * syntax:  
 *     string.replace(searchValue, replaceValue)
 * searchValue: The value to search for.    
 * replaceValue: The value to replace the search value with.
 *               (optional)
 *               (default is an empty string)
 */

/**
 * nested array-array inside another array
 * flat()
 *    -it is used to flat an nested array
 *    -
 * 
 */
let arr17=[[1,2,3],[4,5,6],[7,8,9]];
console.log(arr17);
console.log(arr17.flat());

/**
 * flatMap()
 *     -it is used to flat an nested array
 *     -it process the data on flat array
 */

let arr18=[[1,2,3],[4,5,6],[7,8,9]];
console.log(arr18);
console.log(arr18.flat().flatMap((element)=>{
    return element+10;
}))