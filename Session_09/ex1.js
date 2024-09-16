import { DataTypes, Model } from "@sequelize/core";
import sequelize from "./db.js";

class User extends Model {}

User.init(
    {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING(100),
        age: DataTypes.INTEGER,
    },
    {
        sequelize: sequelize,
    }
);

await User.sync();

const Task = sequelize.define("Task", {
    title: DataTypes.STRING(100),
    completed: DataTypes.BOOLEAN,
});

await Task.sync();
