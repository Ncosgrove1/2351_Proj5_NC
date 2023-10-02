// This is the "For Loop" example, the program will display numbers from 1 to 9 //

const numbers1 = 9;

// looping from i = 1 to 9, in each iteration, i is increased by 1 // 


for (let i = 1; i <= numbers1; i++) {
    console.log(i); 
}

// Another "For Loop" example, this program will multiply numbers, and we will change the value of *i* to *x* for simplicity // 

console.log("\n"); 

let numbers2 = [5, 10, 4];
let result = 1;

for (let x = 0; x < numbers2.length; x++) {
    result = result * numbers2[x];

        // the loop is played, an initial value of 1 was assigned to the (let) variable result.
        // then the array was performed using a "For Loop", multiplying the result by each array number within the loop. 
        // Once that finishes, the answer to the question is then stored in the result variable. // 

}

console.log(result); // Output should be 200 // 


// This is the "While Loop" example, diplay numbers again, this one is a little more confusing to me // 

console.log("\n")

let i = 1;
const numbers3 = 7;

do {
    console.log(i);
    i++;
} while(i <= numbers3);

// CHANGING CSS w/ JavaScript Code // 


document.body.style.color="red";                
document.body.style.fontSize="14px";                
            
document.body.style="background:#222; color:#fff";














