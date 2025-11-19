// Object with arrow function (this will break)
const user = {
    name: "Aditi",
    showName: () => {
        console.log("Arrow this:", this.name); 
        // 'this' does NOT refer to user object → undefined
    }
};

user.showName();

// FIX using normal function
const newUser = {
    name: "Aditi",
    showName: function() {
        console.log("Normal function this:", this.name);
    }
};

newUser.showName();
