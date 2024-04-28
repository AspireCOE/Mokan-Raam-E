var user = {
    id: 1,
    username: 'john_doe',
    email: 'mokan@gmail.com',
    getDetails: function () {
        return "Username: ".concat(this.username, ", Email: ").concat(this.email);
    }
};
console.log(user.getDetails());
function createUser(id, username, email, age) {
    return {
        id: id,
        username: username,
        email: email,
        age: age,
        getDetails: function () {
            if (this.age) {
                return "Username: ".concat(this.username, ", Email: ").concat(this.email, ", Age: ").concat(this.age);
            }
            else {
                return "Username: ".concat(this.username, ", Email: ").concat(this.email);
            }
        }
    };
}
var user1 = createUser(1, 'Mokan', 'Mokan@gmail.com', 30);
var user2 = createUser(2, 'Raam', 'Raam@gmail.com');
// Display user details
console.log(user1.getDetails());
console.log(user2.getDetails());
