import {StarterHandler} from "summer-boot";
import { Application } from "express";

/**
 * 每个进程listen前后
 */
export default class ApplicationHandler implements StarterHandler {
    public after(app: Application): void {
        // console.log("after");
    }

    public before(app: Application): void {
        // console.log("before");
    }
}
