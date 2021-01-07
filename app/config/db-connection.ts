import {Connection, createConnection} from "typeorm";
import {Component, Env, Logger} from "summer-boot";
import DBLogger from "./db-logger";

const path = require("path");

@Component()
export default class DBConnection {

    private connection: Connection;

    constructor() {
        this.init();
    }

    private async init() {
        try {
            const entityDir = Env.isDevelopment ? "../entity/*.ts" : "../entity/*.js";
            this.connection = await createConnection({
                type: "mysql",
                host: "",
                port: 3306,
                username: "",
                password: "",
                database: "",
                entities: [path.resolve(__dirname, entityDir)],
                synchronize: true,
                logger: new DBLogger(),
                maxQueryExecutionTime: 1,
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

    public get manager() {
        return this.connection && this.connection.manager;
    }

    public get getRepository () {
        return this.connection && this.connection.getRepository;
    }

    public get query() {
        return this.connection && this.connection.query;
    }
}
