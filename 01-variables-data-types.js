// ==========================================
// 01. Variables and Data Types
// ==========================================

// --- VARIABLES ---

// let: ভ্যালু পরিবর্তন করা সম্ভব
let age = 22;
age = 23; // ঠিক আছে
console.log("Age:", age);

// const: ভ্যালু পরিবর্তন করা সম্ভব নয়
const birthYear = 2004;
// birthYear = 2005; // এটি ভুল (TypeError দিবে)

// Interview Tip: const দিয়ে অ্যারে বা অবজেক্ট বানালে তার ভেতরের উপাদান বদলানো যায়
const user = { name: "Amena" };
user.name = "Amena Begum"; // ঠিক আছে (মিউটেবল)
console.log("User Object:", user);


// --- DATA TYPES ---

let name = "JavaScript"; // String
let score = 98.5;        // Number
let isLearning = true;   // Boolean
let emptyValue = null;   // Null (খালি)
let unknown;             // Undefined (সংজ্ঞায়িত নয়)

// typeof দিয়ে টাইপ চেক করা
console.log(typeof name);       // output: string
console.log(typeof score);      // output: number
console.log(typeof emptyValue); // output: object (এটি JS এর একটি পরিচিত বাগ/Bug)