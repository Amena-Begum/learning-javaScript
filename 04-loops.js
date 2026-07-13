// ==========================================
// 04. Loops in JavaScript
// ==========================================

/* 
💡 Definition (সংজ্ঞা):
Loops বা লুপ হলো এমন একটি প্রোগ্রামিং স্ট্রাকচার যার মাধ্যমে নির্দিষ্ট কোনো শর্ত (Condition) 
সত্য থাকা পর্যন্ত এক বা একাধিক কোড লাইনকে বারবার (Repeatedly) এক্সিকিউট বা রান করা যায়।
*/

// ------------------------------------------
// ১. For Loop (নির্দিষ্ট সংখ্যক বার লুপ চালানো)
// ------------------------------------------
console.log("--- For Loop ---");

/*
💡 Definition:
যখন আমরা আগে থেকেই জানি যে একটি কোড ব্লক ঠিক কতবার রান করতে হবে, তখন 'for loop' ব্যবহার করা সবচেয়ে সুবিধাজনক।
এর ৩টি প্রধান অংশ থাকে: Initialization (শুরু), Condition (শর্ত), এবং Increment/Decrement (পরিবর্তন)।
*/

// উদাহরণ: ১ থেকে ৫ পর্যন্ত সংখ্যা প্রিন্ট করা
for (let i = 1; i <= 5; i++) {
    console.log(`For Loop Iteration: ${i}`);
}


// ------------------------------------------
// ২. While Loop (শর্তের ওপর ভিত্তি করে লুপ চালানো)
// ------------------------------------------
console.log("\n--- While Loop ---");

/*
💡 Definition:
যখন লুপটি কতবার ঘুরবে তা নির্দিষ্ট থাকে না, বরং একটি নির্দিষ্ট শর্ত সত্য থাকা পর্যন্ত 
লুপটি চালানো প্রয়োজন হয়, তখন 'while loop' ব্যবহার করা হয়। লুপের ভেতরে অবশ্যই কন্ডিশন পরিবর্তনের ব্যবস্থা রাখতে হয়, 
নাহলে লুপটি আজীবন চলতে থাকবে (Infinite Loop)।
*/

let count = 1; // Initialization বাইরে করতে হয়

while (count <= 3) {
    console.log(`While Loop Count: ${count}`);
    count++; // কন্ডিশন আপডেট (এটি না দিলে Infinite Loop হবে)
}


// ------------------------------------------
// ৩. Do-While Loop (কমপক্ষে একবার রান করার লুপ)
// ------------------------------------------
console.log("\n--- Do-While Loop ---");

/*
💡 Definition:
'do-while loop' এর বিশেষত্ব হলো, এটি শর্ত সত্যি হোক বা মিথ্যা হোক—কমপক্ষে একবার (At least once) 
তার ভেতরের কোড ব্লকটি রান করবেই। কারণ এটি প্রথমে কোড এক্সিকিউট করে (do), এবং সবার শেষে শর্ত চেক করে (while)।
*/

let score = 10;

do {
    console.log(`Do-While Code Runs! Score is: ${score}`);
    score++;
} while (score < 5); // শর্তটি মিথ্যা (১০ < ৫), তবুও কোডটি একবার রান হয়েছে।


// ------------------------------------------
// ৪. Loop Control: Break এবং Continue
// ------------------------------------------
console.log("\n--- Break and Continue ---");

/*
💡 Definition (Break):
'break' স্টেটমেন্ট ব্যবহার করে কোনো লুপের শর্ত সম্পূর্ণ শেষ হওয়ার আগেই জোরপূর্বক লুপ থেকে বের (Exit) হয়ে যাওয়া যায়।
*/
console.log("-> Break Example (Stops at 3):");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // i এর মান ৩ হওয়া মাত্রই লুপ পুরোপুরি বন্ধ হয়ে যাবে
    }
    console.log(i);
}

/*
💡 Definition (Continue):
'continue' স্টেটমেন্ট লুপকে পুরোপুরি বন্ধ করে না, বরং লুপের বর্তমান ঘূর্ণনটি (Current Iteration) বাদ দিয়ে 
সরাসরি পরবর্তী ঘূর্ণনে চলে যায়।
*/
console.log("-> Continue Example (Skips 3):");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // i এর মান ৩ হলে নিচের লাইনটি স্কিপ করে লুপ i=৪ এ চলে যাবে
    }
    console.log(i); // ৩ বাদে বাকি সব প্রিন্ট হবে
}


// ------------------------------------------
// ৫. Bonus/Advanced: Modern Loops Touch (সংক্ষিপ্ত ধারণা)
// ------------------------------------------
console.log("\n--- Modern Loops (For...of) ---");

/*
💡 Definition:
ES6-এ আসা 'for...of' লুপ ব্যবহার করে কোনো অ্যারে (Array) বা ইটারেবল অবজেক্টের প্রতিটি উপাদান খুব সহজে 
কোনো ইনডেক্সিং ছাড়াই সরাসরি অ্যাক্সেস করা যায়।
*/

const languages = ["JavaScript", "Python", "C++"];

for (const lang of languages) {
    console.log(`Language: ${lang}`);
}

// ------------------------------------------
// ৬. Advanced & Modern Loops (অবশ্যই জানা দরকার)
// ------------------------------------------
console.log("\n--- Advanced & Modern Loops ---");

/*
💡 Definition (for...in Loop):
'for...in' লুপ ব্যবহার করা হয় কোনো অবজেক্টের (Object) সব প্রোপার্টি বা কি (Keys) 
একটির পর একটি লুপ আকারে ঘুরিয়ে বের করার জন্য।
*/
console.log("-> for...in Loop (For Objects):");
const student = {
    name: "Amena",
    age: 22,
    institute: "DIIT"
};

for (const key in student) {
    // student[key] দিয়ে ডাইনামিকালি ভ্যালু বের করা হচ্ছে
    console.log(`${key}: ${student[key]}`); 
}


/*
💡 Definition (forEach Method):
'forEach' হলো জাভাস্ক্রিপ্ট অ্যারের একটি নিজস্ব মেথড (Built-in Method)। 
এটি অ্যারের প্রতিটি উপাদানের জন্য একটি নির্দিষ্ট ফাংশন (Callback Function) রান করে।
*/
console.log("\n-> forEach Array Method:");
const prices = [100, 250, 500];

prices.forEach(function(price, index) {
    console.log(`Index ${index} has price: ${price} TK`);
});


/*
🔥 INTERVIEW TRICK: Infinite Loop (অনন্ত লুপ) এবং তা থেকে বাঁচার উপায়
💡 Definition:
যদি লুপের শর্ত সবসময় 'সত্য (true)' থাকে এবং তা কখনো মিথ্যা হওয়ার সুযোগ না পায়, 
তবে লুপটি আজীবন চলতে থাকে। একে Infinite Loop বলে। এটি ব্রাউজার বা ক্র্যাশ করাতে পারে।
*/
console.log("\n-> Infinite Loop Example (Commented out for safety):");

// ইন্টারভিউতে অনেক সময় নিচের মতো কোড দিয়ে আউটপুট জানতে চায়:
/*
for (let i = 1; i > 0; i++) {
    // i এর মান সবসময় ০ থেকে বড় থাকবে, তাই এটি কখনো থামবে না!
    console.log(i);
}

while (true) {
    // শর্ত সবসময় সত্য, তাই এটিও একটি ইনফিনিট লুপ
    console.log("Running forever...");
}
*/


/*
🔥 INTERVIEW QUESTION: Nested Loop (লুপের ভেতর লুপ)
💡 Definition:
যখন একটি লুপের ভেতরে আরেকটি লুপ চালানো হয়, তখন তাকে Nested Loop বলে। 
এটি সাধারণত 2D Array বা গ্রিড (Grid) নিয়ে কাজ করার সময় অথবা প্যাটার্ন প্রিন্ট করতে ব্যবহৃত হয়।
*/
console.log("\n-> Nested Loop (Pattern Example):");
// একটি ২x২ গ্রিড প্রিন্ট করার উদাহরণ
for (let row = 1; row <= 2; row++) {
    for (let col = 1; col <= 2; col++) {
        console.log(`Row: ${row}, Column: ${col}`);
    }
}
/*
সংক্ষিপ্ত Summary (কোন লুপ কখন ব্যবহার করবেন?):

for: যখন আপনি জানেন লুপটি ঠিক কতবার ঘুরবে।

while: যখন ঘূর্ণন সংখ্যা অজানা, কিন্তু একটি শর্তের ওপর নির্ভর করে লুপ চালাতে হবে।

do-while: যখন শর্ত যাই হোক না কেন, কোডটি কমপক্ষে একবার রান করাতেই হবে।

for...of: কোনো অ্যারের (Array) সব উপাদান সরাসরি এক এক করে নেওয়ার জন্য।

for...in: কোনো অবজেক্টের (Object) প্রোপার্টি বা কি (Keys) বের করার জন্য।

forEach: অ্যারে নিয়ে কাজ করার আধুনিক এবং সবচেয়ে বেশি ব্যবহৃত শর্টহ্যান্ড মেথড। */