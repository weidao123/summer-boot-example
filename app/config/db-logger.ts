import {Logger, QueryRunner} from "typeorm";
import {Logger as SummerLogger} from "summer-boot";

export default class DBLogger implements Logger {
    log(level: "log" | "info" | "warn", message: any, queryRunner?: QueryRunner): any {
        SummerLogger[level](message);
    }

    /**
     * 记录迁移运行进程中的事件。
     * @param message
     * @param queryRunner
     */
    logMigration(message: string, queryRunner?: QueryRunner): any {
        SummerLogger.info(message);
    }

    /**
     * 记录查询和其中使用的参数。
     * @param query
     * @param parameters
     * @param queryRunner
     */
    logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner): any {
        if (query.indexOf("TABLE_SCHEMA") !== -1 || query.indexOf("SCHEMA_NAME") !== -1) {
            // SummerLogger.debug(query.replace(/\s/g, ""));
            // SummerLogger.debug("start debug");
        } else {
            SummerLogger.info(query);
        }
    }

    /**
     * 记录失败的查询。
     * @param error
     * @param query
     * @param parameters
     * @param queryRunner
     */
    logQueryError(error: string | Error, query: string, parameters?: any[], queryRunner?: QueryRunner): any {
        SummerLogger.error(error);
    }

    /**
     * 记录较慢的查询。
     * @param time
     * @param query
     * @param parameters
     * @param queryRunner
     */
    logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner): any {
        SummerLogger.warn(`${time}ms => ${time}`);
    }

    /**
     * 记录架构生成过程中的事件。
     * @param message
     * @param queryRunner
     */
    logSchemaBuild(message: string, queryRunner?: QueryRunner): any {
        SummerLogger.debug(message);
    }
}
