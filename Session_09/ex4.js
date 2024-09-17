import { DataTypes } from "@sequelize/core";
import sequelize from "./db.js";

const Book = sequelize.define(
    "Book",
    {
        // you can use only one autoincremental field
        // primary key shoulb be autoincremental, otherwise you must provide in each record
        bookId: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
        pages: DataTypes.SMALLINT,
        title: {
            type: DataTypes.STRING(200) + "charset latin1 collate latin1_swedish_ci",
            defaultValue: true,
        },
        description: {
            type: DataTypes.STRING(2000),
            defaultValue: "No Description",
        },
    },
    {
        charse: "utf8mb3",
        collate: "utf8mb3_persian_ci",
        engine: "MyISAM",
        initialAutoIncrement: 10,
        freezeTableName: true,
        tableName: "the_books",
        // underscored: true,
    }
);

await sequelize.drop()
await Book.sync({ force: true });

await Book.create({ pages: 100, title: "Test Book", description: "X" });
