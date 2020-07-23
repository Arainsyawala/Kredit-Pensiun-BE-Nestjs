import { Injectable, NotFoundException } from "@nestjs/common";
import {User} from "./users.entity"
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult, DeleteResult } from "typeorm";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async getById(id: string): Promise<any> {
        let user: User;
        try {
            user = await this.userRepository.findOne(id);
        } catch (error) {}
            if (!user) {
                throw new NotFoundException(`User with id ${JSON.stringify(id)} does not exist`);
            }
        return user;
    }
    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async create(users: User): Promise<User> {
        return await this.userRepository.save(users);
    }

    async update(users: User): Promise<User> {
        const payload = await this.userRepository.update(users.id, users);
        return users;
    }

    async delete(id: string): Promise<DeleteResult> {
        const user = await this.getById(id);
        try {
            return await this.userRepository.delete(id);
        } catch (e) {
            throw new NotFoundException((`User with ${id.toString()} not found.`))
        }
    }
}
