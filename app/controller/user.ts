import {Autowrite, Body, Controller, Delete, Env, Get, ParamType, PathVariable, Post} from "summer-boot";
import UserService from "../service/user";
import User from "../entity/user";

@Controller({path: "/user"})
export default class UserController {

    @Autowrite()
    private user: UserService;

    @Get("/env")
    public env() {
        return {
            env: Env.env
        }
    }

    @Get("/list")
    public async list() {
        const [list, total] = await this.user.getList();
        return { list, total };
    }

    @Post("/save")
    public async save(@Body({type: ParamType.entity, entity: User}) user: User) {
        user.update_time = new Date();
        return await this.user.save(user);
    }

    @Get("/:name")
    public async getOne(@PathVariable("name") name: string) {
        return await this.user.getOne(name);
    }

    @Delete("/:id")
    public async remove(@PathVariable("id", ParamType.number) id: number) {
        return await this.user.remove(id);
    }
}
