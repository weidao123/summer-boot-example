import {Connection, createConnection} from "typeorm";
import {Component, Logger} from "summer-boot";
import {Env} from "summer-boot/dist/util";

const path = require("path");

@Component()
export default class DB {

    public connection: Connection;

    constructor() {
        this.init();
    }

    private async init() {
        try {
            const entityDir = process.env.NODE_ENV === "development" ? "../entity/*.ts" : "../entity/*.js";
            this.connection = await createConnection({
                type: "mysql",
                host: "host",
                port: 3306,
                username: "root",
                password: "password",
                database: "study",
                entities: [path.resolve(__dirname, entityDir)],
                synchronize: true,
                logging: false,
            });
            Logger.info("db init success");
        } catch (e) {
            Logger.error(e);
        }
    }

    public async getConnection() {
        if (!this.connection) {
            await this.init();
        }
        return this.connection;
    }

}
