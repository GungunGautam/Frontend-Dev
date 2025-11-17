let feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words
let wordCount = feedback.split(" ").length;

// Check negativity
let negative =
    feedback.toLowerCase().includes("bad") ||
    feedback.toLowerCase().includes("poor");

if (negative) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}

console.log("Word Count:", wordCount);
