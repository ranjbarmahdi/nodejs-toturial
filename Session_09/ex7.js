import { DataTypes } from "@sequelize/core";
import sequelize from "./db.js";

const Test = sequelize.define(
    "Test",
    {
        filed1: {
            type: DataTypes.STRING,
            validate: {
                max: 100,
                min: 10,
                isEven(value) {
                    if (value % 2 != 0) {
                        throw new Error("Only even values are allowed");
                    }
                },
            },
        },
        filed2: DataTypes.INTEGER,
        filed3: DataTypes.INTEGER,
    },
    {
        timestamps: false,
        bothOrNone() {
            const isSetField2 = !(this.filed2 === null || this.filed2 === undefined);
            const isSetField3 = !(this.filed3 === null || this.filed3 === undefined);
            if (isSetField2 != isSetField3) {
                throw new Error("you can not set only one of 'field2' and 'field3' ");
            }
        },
    }
);

await Test.sync({ force: true });
