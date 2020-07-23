import { UsersService } from "./users.service";
import { User } from "./users.entity";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    index(): Promise<User[]>;
    getByID(id: any): Promise<any>;
    create(usersData: User): Promise<any>;
    update(id: any, usersData: User): Promise<any>;
    delete(id: any): Promise<any>;
}
