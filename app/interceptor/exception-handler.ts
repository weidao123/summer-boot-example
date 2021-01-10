import {Request, Response} from "express";
import {ErrorHandler, ExceptionHandler, Logger} from "summer-boot";
import {BusinessError} from "../util/throw-error";

/**
 * 全局异常处理
 */
@ErrorHandler()
export default class ExceptionInterceptor implements ExceptionHandler {
    public exception(req: Request, res: Response, e: BusinessError) {
        Logger.error("发生异常-->" + e.message);
        res.send({
            msg: e.message,
            data: null,
            code: e.status || 1,
            status: e.status || null,
        });
    }
}
