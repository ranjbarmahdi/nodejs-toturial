import { DataTypes } from "@sequelize/core";
import sequelize from "./db.js";

const Book = sequelize.define(
    "Book",
    {
        title: DataTypes.STRING(200),
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        test1: {
            type: DataTypes.STRING,
            index: true,
        },
        test2: {
            type: DataTypes.STRING,
            index: "my_index",
        },
        test3: {
            type: DataTypes.STRING,
            unique: true,
        },
        test4: {
            type: DataTypes.STRING,
            unique: "unique_test4",
        },
        test5: {
            type: DataTypes.STRING,
            unique: "unique_t",
        },
        test6: {
            type: DataTypes.STRING,
            unique: "unique_t",
        },
    },
    {
        timestamps: false,
        indexes: [
            {
                name: "title_idx",
                type: "UNIQUE",
                fields: ["title"],
            },
            {
                name: "completed_idx",
                fields: ["completed"],
            },
        ],
    }
);

await Book.sync({ force: true });
