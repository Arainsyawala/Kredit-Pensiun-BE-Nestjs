import { User } from "./users.entity";
import { Repository, DeleteResult } from "typeorm";
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getById(id: string): Promise<any>;
    findAll(): Promise<User[]>;
    create(users: User): Promise<User>;
    update(users: User): Promise<User>;
    delete(id: string): Promise<DeleteResult>;
}
