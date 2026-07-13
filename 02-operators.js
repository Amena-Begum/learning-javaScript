// ==========================================
// 02. Operators in JavaScript
// ==========================================

// ------------------------------------------
// ১. Arithmetic Operators (গাণিতিক অপারেটর)
// ------------------------------------------
console.log("--- Arithmetic Operators ---");

let x = 10;
let y = 3;

console.log("Addition (+):", x + y);         // 13
console.log("Subtraction (-):", x - y);      // 7
console.log("Multiplication (*):", x * y);   // 30
console.log("Division (/):", x / y);         // 3.3333...
console.log("Remainder/Modulus (%):", x % y); // 1 (ভাগশেষ)
console.log("Exponentiation (**):", x ** y); // 10^3 = 1000 (পাওয়ার)

// Increment (++) & Decrement (--)
let count = 5;
count++; // count এখন 6 (Post-increment)
console.log("Increment:", count);

// ------------------------------------------
// ২. Assignment Operators (অ্যাসাইনমেন্ট অপারেটর)
// ------------------------------------------
console.log("\n--- Assignment Operators ---");

let a = 10;
a += 5; // a = a + 5 এর সংক্ষিপ্ত রূপ (এখন a = 15)
console.log("+= Example:", a);

a *= 2; // a = a * 2 (এখন a = 30)
console.log("*= Example:", a);


// ------------------------------------------
// ৩. Comparison Operators (তুলনামূলক অপারেটর)
// ------------------------------------------
console.log("\n--- Comparison Operators ---");

let num = 5;
let strNum = "5";

// [INTERVIEW TIP]: == বনাম === এর পার্থক্য খুবই গুরুত্বপূর্ণ!
// '==' শুধু ভ্যালু (Value) চেক করে, ডেটা টাইপ দেখে না (Loose Equality)
console.log("Loose Equality (==):", num == strNum);   // true

// '===' ভ্যালু এবং ডেটা টাইপ দুটিই চেক করে (Strict Equality)
console.log("Strict Equality (===):", num === strNum); // false (কারণ একটি Number, অন্যটি String)

// অন্যান্য তুলনা
console.log("Not Equal (!=):", 10 != 5);       // true
console.log("Greater Than (>):", 10 > 5);      // true
console.log("Less Than or Equal (<=):", 5 <= 5); // true


// ------------------------------------------
// ৪. Logical Operators (লজিক্যাল অপারেটর)
// ------------------------------------------
console.log("\n--- Logical Operators ---");

let hasHighIncome = true;
let hasGoodCredit = false;

// && (AND): সব শর্ত সত্য হতে হবে
let eligibleForLoanAND = hasHighIncome && hasGoodCredit;
console.log("Logical AND (&&):", eligibleForLoanAND); // false

// || (OR): যেকোনো একটি শর্ত সত্য হলেই হবে
let eligibleForLoanOR = hasHighIncome || hasGoodCredit;
console.log("Logical OR (||):", eligibleForLoanOR);   // true

// ! (NOT): সত্যকে মিথ্যা এবং মিথ্যাকে সত্য করে
console.log("Logical NOT (!):", !hasHighIncome);      // false


// ------------------------------------------
// ৫. Ternary Operator (শর্টহ্যান্ড ইফ-এলস)
// ------------------------------------------
console.log("\n--- Ternary Operator ---");

// (condition) ? if_true : if_false;
let age = 20;
let allowedToVote = age >= 18 ? "Yes, you can vote." : "No, too young.";
console.log("Ternary Result:", allowedToVote); // "Yes, you can vote."


// ------------------------------------------
// ৬. Advanced/Bonus: String Concatenation vs Type Coercion
// ------------------------------------------
console.log("\n--- Special Behavior / Edge Cases ---");

// '+' অপারেটর সংখ্যা যোগ করার পাশাপাশি স্ট্রিং জোড়া লাগাতেও (Concatenate) ব্যবহৃত হয়
console.log("Result of '5' + 5 :", "5" + 5);   // output: "55" (String)
console.log("Result of '5' - 5 :", "5" - 5);   // output: 0 (Number! বিয়োগের সময় JS স্ট্রিংকে অটোমেটিক সংখ্যায় রূপান্তর করে)
console.log("Result of 'five' * 2 :", "five" * 2); // output: NaN (Not a Number)