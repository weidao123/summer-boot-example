import {Autowrite, Controller, Get} from "summer-boot";
import UserService from "../service/user";

@Controller()
export default class UserController {

    @Autowrite()
    private user: UserService;

    @Get("/list")
    public list() {
        return ['张三', '里斯', ...this.user.getUsername()]
    }
}
