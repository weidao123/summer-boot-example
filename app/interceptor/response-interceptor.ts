import {Interceptor, InterceptorHandler} from "summer-boot";
import {Request, Response} from "express";

/**
 * 拦截所有请求
 * @Interceptor("/user/(.*)") // 拦截/user/的所有
 */
@Interceptor()
export default class ResponseInterceptor implements InterceptorHandler {
    public after(req: Request, res: Response, data: any): Object {
        return {
            ret: 0,
            data,
            msg: "success"
        };
    }

    public before(req: Request, res: Response): boolean {
        return true;
    }
}
