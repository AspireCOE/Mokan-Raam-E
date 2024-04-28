interface User {
    id: number;
    username: string;
    email: string;
    age?: number;
    getDetails: () => string;
}

let user: User = {
    id: 1,
    username: 'john_doe',
    email: 'mokan@gmail.com',
    getDetails: function() {
        return `Username: ${this.username}, Email: ${this.email}`;
    }
};

console.log(user.getDetails());

function createUser(id: number, username: string, email: string, age?: number): User {
    return {
        id,
        username,
        email,
        age,
        getDetails: function() {
            if (this.age) {
                return `Username: ${this.username}, Email: ${this.email}, Age: ${this.age}`;
            } else {
                return `Username: ${this.username}, Email: ${this.email}`;
            }
        }
    };
}

let user1 = createUser(1, 'Mokan', 'Mokan@gmail.com', 30);
let user2 = createUser(2, 'Raam', 'Raam@gmail.com');

// Display user details
console.log(user1.getDetails()); 
console.log(user2.getDetails());