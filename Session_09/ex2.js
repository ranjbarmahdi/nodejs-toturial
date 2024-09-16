import { DataTypes } from "@sequelize/core";
import sequelize from "./db.js";

const User = sequelize.define(
    "User",
    {
        firstname: DataTypes.STRING,
        firstname: DataTypes.STRING(100),
        age: DataTypes.INTEGER,
        username: DataTypes.STRING(100),
    },
    {
        timestamps: false,
    }
);

const Task = sequelize.define(
    "Task",
    {
        title: DataTypes.STRING,
        completed: DataTypes.INTEGER,
    },
    {
        timestamps: false,
        noPrimaryKey: false,
    }
);

// await User.sync();
// await Task.sync();

// drop table if exists, then create a new one
// await User.sync({ force: true });
// await Task.sync({ force: true });

// alter table if any difference exists, but data will not deleted
// await User.sync({ alter: true });
// await Task.sync({ alter: true });

// sync all tables
await sequelize.sync();

// sync all tables
// await sequelize.sync({alter: true});


// drop a table
// await User.drop()

// drop a table
// await sequelize.drop()