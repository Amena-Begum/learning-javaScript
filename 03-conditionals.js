// ==========================================
// 03. Conditionals in JavaScript
// ==========================================

// ------------------------------------------
// ১. Basic If-Else & Else-If Ladder
// ------------------------------------------
console.log("--- Basic Conditionals ---");

let examScore = 78;
let grade;

if (examScore >= 80) {
    grade = "A+";
} else if (examScore >= 70) {
    grade = "A";
} else if (examScore >= 60) {
    grade = "A-";
} else {
    grade = "F";
}
console.log(`Your Score: ${examScore}, Grade: ${grade}`); // Output: A


// ------------------------------------------
// ২. Truthy vs Falsy Values (ইন্টারভিউয়ের জন্য সবচেয়ে গুরুত্বপূর্ণ)
// ------------------------------------------
console.log("\n--- Truthy vs Falsy Values ---");

// জাভাস্ক্রিপ্টে মাত্র ৬টি মূল Falsy ভ্যালু আছে। এগুলো কন্ডিশনে থাকলে 'false' হিসেবে কাজ করে:
// ১. false
// ২. 0 (অথবা -0, 0n)
// ৩. "" (খালি স্ট্রিং)
// ৪. null
// ৫. undefined
// ৬. NaN (Not a Number)

// এই ৬টি বাদে বাকি সবকিছুই (এমনকি খালি অ্যারে [] বা খালি অবজেক্ট {} ও) "Truthy" হিসেবে কাজ করে।

let username = ""; // এটি একটি Falsy ভ্যালু (খালি স্ট্রিং)

if (username) {
    console.log(`Welcome, ${username}!`);
} else {
    console.log("Guest User: Please provide a username."); // এটি রান হবে
}

// ট্রিকি ইন্টারভিউ প্রশ্ন: খালি অ্যারে ([]) কি Truthy নাকি Falsy?
let itemsInCart = []; // খালি অ্যারে কিন্তু Truthy!

if (itemsInCart) {
    console.log("Array is Truthy! (Even if it is empty)"); // এটি রান হবে
}


// ------------------------------------------
// ৩. Switch Case (নির্দিষ্ট ভ্যালু ম্যাচ করার জন্য)
// ------------------------------------------
console.log("\n--- Switch Case ---");

// [INTERVIEW TIP]: Switch কেস সবসময় '===' (Strict Equality) দিয়ে ইন্টারনাল তুলনা করে।
let dayNumber = 2;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break; // break না দিলে নিচের কোডগুলোও রান হয়ে যাবে (Fall-through)
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid Day Number!"; // কোনো কেস ম্যাচ না করলে এটি রান হবে
}
console.log(`Day ${dayNumber} is: ${dayName}`); // Output: Monday


// ------------------------------------------
// ৪. Logical Shortcut (Short-Circuit Evaluation)
// ------------------------------------------
console.log("\n--- Short-Circuiting ---");

// && অপারেটর প্রথম Falsy ভ্যালু পেলেই থেমে যায়, আর না পেলে শেষ ভ্যালু রিটার্ন করে
let isLoggedIn = true;
let displayProfile = isLoggedIn && "User Dashboard Loaded";
console.log(displayProfile); // Output: User Dashboard Loaded

// || অপারেটর প্রথম Truthy ভ্যালু পেলেই সেটা রিটার্ন করে (ডিফল্ট ভ্যালু সেট করার জন্য দারুণ)
let userNickname = "";
let greetingName = userNickname || "Anonymous";
console.log("Welcome,", greetingName); // Output: Welcome, Anonymous