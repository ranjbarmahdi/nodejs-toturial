import { DataTypes } from "@sequelize/core";
import sequelize from "./db.js";

const Book = sequelize.define(
    "book",
    {
        pages: DataTypes.SMALLINT,
        title: {
            type: DataTypes.STRING(100),
            defaultValue: "",
        },
        description: {
            type: DataTypes.TEXT,
            defaultValue: "No Description",
        },
        published: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

await Book.sync({ force: true });

// await Book.create({ category: "Programming" });

const newBook = await Book.create({ category: "Programming" });
console.log("New Book : ", newBook);

const x = await Book.findAll();
console.log("all : ", x);
