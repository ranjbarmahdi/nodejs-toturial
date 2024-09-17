import { DataTypes } from "@sequelize/core";
import sequelize from "./db.js";

const User = sequelize.define("User", {
    username: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
});

await User.sync({ force: true });

console.clear();

const user1 = await User.create({
    username: "user1",
    firstname: "first1",
    lastname: "last1",
});
user1.username = "username1";
user1.save();

const user2 = User.build({
    username: "user2",
});
user2.firstname = "user2";
await user2.save();

user2.lastname = "last2";
await user2.reload();

await user2.save();

// console.log(user2);
// console.log(user2.toJSON());
// console.log(user2.dataValues);

// console.log(user2 instanceof User);             // true
// console.log(user2.toJSON() instanceof User);    // false

const user3 = await User.create(
    {
        username: "user3",
        firstname: "first3",
        lastname: "last3",
    },
    {
        fields: ["firstname", "lastname"],
    }
);

const [user, created] = await User.findOrCreate({
    where: { username: "user4" },
    defaults: {
        lastname: "last4",
    },
});

// console.log(user);    // the created or finded user
// console.log(created);             // true false

const results = await User.bulkCreate([
    {
        username: "user5",
        firstname: "first5",
        lastname: "last5",
    },
    {
        username: "user6",
        firstname: "first6",
        lastname: "last6",
    },
]);

export default User;
