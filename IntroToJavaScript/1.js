let userName = "Gungun";
let hour = new Date().getHours();

if (hour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (hour >= 12 && hour < 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}