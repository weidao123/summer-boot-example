import {Controller, Multipart, Post, Req, SummerDate} from "summer-boot";
import {throwError} from "../util/throw-error";

const path = require("path");

@Controller("/upload")
export default class UploadController {

    @Post("/file")
    public async file(@Req req) {
        const opt = {
            uploadDir: path.resolve(process.cwd(), "public/upload"),
        };
        const multipart = await Multipart.parse(req, opt);
        if (!multipart.hasFile("file")) {
            throwError("文件不存在", 2);
        }
        await multipart.save(f => `${SummerDate.currentDate()}-${f.originName}`);
        return "success";
    }
}
