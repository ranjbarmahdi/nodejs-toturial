import { Sequelize } from "@sequelize/core";

const sequelize = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    database: "test",
    username: "root",
    password: "hd6730mrm",
    logging: false,
});

try {
    await sequelize.authenticate();
    console.log("Connected Successfullt");
} catch (error) {
    console.log(error.message);
}

export default sequelize;
