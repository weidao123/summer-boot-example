import {Autowrite, Service} from "summer-boot";
import DBConnection from "../config/db-connection";
import User from "../entity/user";

@Service()
export default class UserService {

    @Autowrite()
    private connection: DBConnection;

    /**
     * 列表
     */
    public async getList() {
        return await this.connection.getRepository(User).findAndCount();
    }

    /**
     * 创建
     * @param user
     */
    public async save(user: User) {
        try {
            return await this.connection.manager.save(user);
        } catch (e) {
            console.error(e);
            return e;
        }
    }

    /**
     * 获取
     * @param name
     */
    public async getOne(name: string) {
        try {
            return await this.connection.getRepository(User).findOne({username: name});
        } catch (e) {
            return e;
        }
    }

    /**
     * 删除
     * @param id
     */
    public async remove(id: number) {
        try {
            const user = await this.connection.getRepository(User);
            const one = await user.findOne({id});
            return await this.connection.getRepository(User).remove(one);
        } catch (e) {
            return e;
        }
    }
}
