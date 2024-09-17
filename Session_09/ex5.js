import { DataTypes } from "@sequelize/core";
import sequelize from "./db.js";

const Book = sequelize.define(
    "Book",
    {
        title: {
            type: DataTypes.STRING(200) + "charset latin1 collate latin1_swedish_ci",
            defaultValue: true,
        },
        desc: {
            type: DataTypes.STRING(2000),
            defaultValue: "No Description",
            columnName: "description",
        },
    },
    {
        createdAt: "created_at",
        updatedAt: false,
        deletedAt: true,
        paranoid: true
    }
);
 
await Book.sync({ force: true });
