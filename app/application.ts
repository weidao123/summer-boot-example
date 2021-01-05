import {StarterHandler} from "summer-boot";
import { Application } from "express";

export default class ApplicationHandler implements StarterHandler {
    public after(app: Application): void {
        console.log("App启动之前");
    }

    public before(app: Application): void {
        console.log("App启动之后");
    }
}
