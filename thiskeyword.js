// explain the this keyword

// below it will go to the parent which is the window to get that value
this.a = 5;

const getParam = () => {
    console.log(this.a);
}

getParam();

// ------------------------------------------------------------------------
let user = {
    name: "Mike",
    age: 24,
    // below is a normal function
    getDetails () {
        console.log(this.name);
    }
};

user.getDetails();

// ------------------------------------------------------------------------
// what if it was further nested?
// normal function only access the immediate object, it doesn't go further
// the example below, we will only get the new name, the other will be undefined

let user2 = {
    name: "Mike",
    age: 24,
    childObj: {
        newName: "Kiplangat",
        // below is a normal function
        getDetails () {
        console.log(this.newName, "and", this.name);
    }
    }
    
};
user2.childObj.getDetails();