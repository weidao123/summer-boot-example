import {Service} from "summer-boot";

@Service()
export default class UserService {
    public getUsername() {
        return ["weidoa", process.env.NODE_ENV];
    }
}
