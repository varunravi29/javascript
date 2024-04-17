// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const string1 = "A string primitive ";
const string2 = "Also a string primitive";
const string3 = `Yet another string primitive`;

const username = `Varun Ravi-Balbudhe`;

// String Methods
// Access the character from the string
console.log(`(1).output-> First Way To Access : ${username.charAt(0)}`); // v

// Another Way to Access the string as a Array-like Objects
console.log(`\n (2).output-> Second Way TO Access : ${username[0]}`); // v

// We can print the character from the back of the string using only {.at()} not using the {charAt()};
console.log(`\n (3).output-> From Back Of The String using .charAt() (not working)  < ${username.charAt(-1)} >`);  // Not Working
console.log(`\n (4).output-> From Back Of The String using .at() < ${username.at(-1)} >`);      // Working

// Using length property and charAt() method
console.log(`\n (5).output-> How To Access The Element From The Back Of String (Using .charAt()) < ${username.charAt(username.length - 1)} >`)

// using .slice() Method
console.log(`\n (6).output-> Slice Method < ${username.slice(0,5)} >`);

// charCodeAt()
console.log(`\n (7).output-> CharCodeAt Method at index (4) of the username String is < ${username.charAt(4)} > and its charCode is < ${username.charCodeAt(4)} >`)

// concat Method
console.log(`\n (8).output-> < ${string1.concat(string3)} >`)

// .endsWith()
console.log(`\n (9).output-> Checking The String1 endswith the 'primitive' with total string length < ${string2.endsWith('primitive')} >`);
console.log(`\n (10).output-> Checking The String1 endswith the 'primitive' with string length of 5 < ${string2.endsWith('primitive',5)} >`);

// substring()
/*
 * substring(), they are start and end 
 */
console.log(`\n (11).output-> Substring of the String Username from the index: 5 < ${username.substring(5)} >`);
console.log(`\n (12).output-> Substring of the String Username from the index: 5 to Index: 10: < ${username.substring(5,10)} >`);

// substr()
/*
 * substr(), have start and how many length further you want length() 
 */
console.log(`\n (13).output-> substr of the String Username from the index: 5 < ${username.substr(5,3)} >`);

// slice {inside the .slice() the strings from the string end using -1 is applicable}
console.log(`\n (14).output-> slice method ${string1.slice(-5,-2)}`)

// toUppercase() or toLowercase()
console.log(`\n (15).output-> string1 to lowercase < ${string1.toLowerCase()} >`)
console.log(`\n (16).output-> string1 to lowercase < ${string1.toUpperCase()} >`)

// trim 
console.log(`\n (17).output-> trim in string1 < ${string1.trim()} >`)