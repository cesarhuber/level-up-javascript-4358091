// Write your code here
const username = Symbol("username");
const password = Symbol("password");

class User {
  constructor(username, password, age) {
    this[username] = username;
    this[password] = password;
    this.age = age;
  }

  setUsername(newUsername) {
    this[username] = newUsername;
  }

  setPassword(newPassword) {
    this[password] = newPassword;
    console.log("password set to:", newPassword);
  }

  get userInfo() {
    return {
      username: this[username],
      age: this.age
    }
  }
}

const Cesar = new User("cesarhuber", "123456", 36)

console.log("password:", Cesar._password);
console.log("username:", Cesar._username);
console.log("age:", Cesar.age);
console.log("user info:", Cesar.userInfo);

Cesar.setPassword("456123");