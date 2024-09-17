import User from "./user.js";


console.clear();

const result = await User.findAll();
console.log(result[0]);