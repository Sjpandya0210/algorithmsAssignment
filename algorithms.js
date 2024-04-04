//Determine the validity of an input string s, which consists solely of the characters (, ), {, }, [, and ].
// You need to check the following conditions: 
//stack-based algorithm to validate the string.


function isValid(s) {
  const stack = [];
  const openBrackets = ["(", "{", "["];
  const closingBrackets = [")", "}", "]"];

  for (let i = 0; i < s.length; i++) {
    const char = s[i]; //take first value from the s parameter 

    if (openBrackets.includes(char)) { 
      stack.push(char); //and add first element to the stack 
    } else if (closingBrackets.includes(char)) {
      const openBracket = openBrackets[closingBrackets.indexOf(char)];

      if (stack.length === 0 || stack.pop() !== openBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}


// Example usage:
const s1 = "()";
console.log(isValid(s1)); // Output: true

const s2 = "()[]{}";
console.log(isValid(s2)); // Output: true

const s3 = "(]";
console.log(isValid(s3)); // Output: false

const s4 = "([)]";
console.log(isValid(s4)); // Output: false



/*Question 2
There are n people in a line waiting to purchase tickets, with the 0th person at the front and the (n - 1)th person at the back. 

You are given a 0-indexed integer array of tickets of length n, where tickets[I] represents the number of tickets that the ith person wishes to purchase. 

Each person purchases a ticket in exactly one second. A person can only purchase one ticket at a time and must return to the end of the line (which happens instantly) to purchase additional tickets. If a person has no more tickets to buy, he or she will leave the line. 

Return the time spent for the individual at position k (0-indexed) to finish buying tickets. 

Example:

Input: tickets = [2,3,2], k = 2
Output: 6 */

function timeToBuyTickets(tickets, k) {
  const n = tickets.length;
  let time = 0;
  let queue = Array.from({ length: n }, (_, i) => i); // Create an array representing the queue

  while (true) {
    const currentPerson = queue.shift(); // Get the front person from the queue

    if (currentPerson === k) {
      return time; // Return the time if it's the target person
    }

    if (tickets[currentPerson] > 0) {
      tickets[currentPerson]--; // Reduce the number of tickets for the current person
      queue.push(currentPerson); // Send the current person to the end of the queue
    }

    time++; // Increment the time
  }
}

// Example usage
const tickets = [2, 3, 1, 4, 5];
const k = 2;

const timeTaken = timeToBuyTickets(tickets, k);
console.log(
  `Time taken for person at position ${k} to finish buying tickets: ${timeTaken} seconds`
);


// function timeToBuyTickets(tickets, k) {
//   let time = 0;
//   const n = tickets.length;
//   let remainingTickets = tickets[k];

//   // Continue purchasing tickets until the person at position k finishes buying all tickets
//   while (remainingTickets > 0) {
//       for (let i = 0; i < n; i++) {
//           // Decrease the number of tickets the current person wants to buy
//           tickets[i]--;
//           // Increment the time spent
//           time++;
//           // If the current person is at position k and has finished buying tickets, return the time spent
//           if (i === k && tickets[i] === 0) {
//               return time;
//           }
//       }
//       // Update the remaining tickets for the person at position k
//       remainingTickets = tickets[k];
//   }

//   return time;
// }

// // Example usage:
// const tickets = [2, 3, 2];
// const k = 2;
// console.log(timeToBuyTickets(tickets, k)); // Output: 6