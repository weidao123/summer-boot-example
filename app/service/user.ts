import {Autowrite, Service} from "summer-boot";
import DB from "../config/db";
import User from "../entity/user";

@Service()
export default class UserService {

    @Autowrite()
    private db: DB;

    /**
     * 列表
     */
    public async getList() {
        return await this.db.connection.getRepository(User).findAndCount();
    }

    /**
     * 创建
     * @param user
     */
    public async save(user: User) {
        try {
            return await this.db.connection.manager.save(user);
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
            return this.db.connection.getRepository(User).findOne({username: name});
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
            const user = this.db.connection.getRepository(User);
            const one = await user.findOne({id});
            return await this.db.connection.getRepository(User).remove(one);
        } catch (e) {
            return e;
        }
    }
}
