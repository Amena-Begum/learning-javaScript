// ==========================================
// 03. Conditionals in JavaScript
// ==========================================

/* 
💡 Definition (সংজ্ঞা):
Conditionals বা শর্তমূলক স্টেটমেন্টের মাধ্যমে কোডের নির্দিষ্ট কোনো অংশ কখন রান হবে 
তা নিয়ন্ত্রণ করা হয়। যদি কোনো শর্ত 'সত্য (true)' হয়, তবেই কেবল নির্দিষ্ট কোড ব্লকটি এক্সিকিউট হয়।
*/

// ------------------------------------------
// ১. If-Else এবং Else-If Ladder
// ------------------------------------------
console.log("--- Basic Conditionals ---");

/*
💡 Definition:
- if: প্রথম শর্ত চেক করার জন্য ব্যবহৃত হয়।
- else if: প্রথম শর্ত মিথ্যা হলে পরবর্তী নতুন কোনো শর্ত চেক করার জন্য ব্যবহৃত হয়।
- else: উপরের কোনো শর্তই যদি সত্যি না হয়, তবে একদম শেষে ডিফল্টভাবে এটি রান হয়।
*/

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
// ২. Truthy vs Falsy Values
// ------------------------------------------
console.log("\n--- Truthy vs Falsy Values ---");

/*
💡 Definition:
জাভাস্ক্রিপ্টে কোনো ভ্যালু সরাসরি Boolean (true/false) না হলেও, কন্ডিশনের ভেতরে 
বসালে সেটি সত্য বা মিথ্যার মতো আচরণ করে।
- Falsy Value: যে ভ্যালুগুলো কন্ডিশনে থাকলে ডিফল্টভাবে 'false' হিসেবে গণ্য হয়।
- Truthy Value: Falsy ভ্যালুগুলো বাদে জাভাস্ক্রিপ্টের বাকি সব ভ্যালুই 'true' হিসেবে গণ্য হয়।

🔥 ইন্টারভিউ নোট: জাভাস্ক্রিপ্টে মাত্র ৬টি মূল Falsy ভ্যালু আছে:
১. false     (সরাসরি বুলিয়ান)
২. 0         (সংখ্যা শূন্য, এছাড়া -0 বা BigInt 0n)
৩. ""        (খালি স্ট্রিং/Empty String)
৪. null      (উদ্দেশ্যপ্রণোদিতভাবে খালি রাখা)
৫. undefined (যার কোনো ভ্যালু সেট করা হয়নি)
৬. NaN       (Not a Number - গাণিতিক ভুল ভ্যালু)
*/

let username = ""; // এটি একটি Falsy ভ্যালু (খালি স্ট্রিং)

if (username) {
    console.log(`Welcome, ${username}!`);
} else {
    console.log("Guest User: Please provide a username."); // যেহেতু খালি স্ট্রিং Falsy, তাই এটি রান হবে
}

// 💥 ট্রিকি ইন্টারভিউ প্রশ্ন: খালি অ্যারে ([]) বা খালি অবজেক্ট ({}) কি Truthy নাকি Falsy?
let itemsInCart = []; // খালি অ্যারে কিন্তু এটি Truthy! 

if (itemsInCart) {
    console.log("Array is Truthy! (Even if it is empty)"); // এটি রান হবে
}


// ------------------------------------------
// ৩. Switch Case
// ------------------------------------------
console.log("\n--- Switch Case ---");

/*
💡 Definition:
যখন একটিমাত্র ভ্যারিয়েবলের মানের ওপর ভিত্তি করে অনেকগুলো আলাদা আলাদা কন্ডিশন চেক করতে হয়, 
তখন অনেকগুলো else-if না লিখে 'Switch Case' ব্যবহার করা কোডকে আরও রিডেবল (সহজে পড়ার যোগ্য) করে।

🔥 ইন্টারভিউ নোট: Switch কেস সবসময় '===' (Strict Equality) অর্থাৎ ভ্যালু এবং ডেটা টাইপ 
উভয়ই নিখুঁতভাবে চেক করে কাজ করে।
*/

let dayNumber = 2;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break; // break না দিলে নিচের কোডগুলোও রান হয়ে যাবে (যাকে Fall-through বলে)
    case 3:
        dayName = "Tuesday";
        break;
    default:
        dayName = "Invalid Day Number!"; // কোনো কেস ম্যাচ না করলে এটি রান হবে
}
console.log(`Day ${dayNumber} is: ${dayName}`); // Output: Monday


// ------------------------------------------
// ৪. Short-Circuit Evaluation (লজিক্যাল শর্টকাট)
// ------------------------------------------
console.log("\n--- Short-Circuiting ---");

/*
💡 Definition:
লজিক্যাল অপারেটর (&& এবং ||) ব্যবহার করে পুরো কন্ডিশনাল ব্লক না লিখে এক লাইনে 
শর্ত সাপেক্ষে মান নির্ধারণ বা কোড এক্সিকিউট করার পদ্ধতিকে Short-Circuit Evaluation বলে।
- AND (&&): প্রথম Falsy ভ্যালু পেলেই থেমে যায়, না পেলে শেষ ভ্যালুটি রিটার্ন করে।
- OR (||): প্রথম Truthy ভ্যালু পেলেই থেমে যায় এবং সেটি রিটার্ন করে (ডিফল্ট ভ্যালু সেটের জন্য ব্যবহৃত হয়)।
*/

// && এর উদাহরণ (isLoggedIn সত্য হলে পরের লেখাটি প্রিন্ট হবে)
let isLoggedIn = true;
let displayProfile = isLoggedIn && "User Dashboard Loaded";
console.log(displayProfile); // Output: User Dashboard Loaded

// || এর উদাহরণ (userNickname খালি/Falsy হলে ডিফল্ট "Anonymous" সেট হবে)
let userNickname = "";
let greetingName = userNickname || "Anonymous";
console.log("Welcome,", greetingName); // Output: Welcome, Anonymous