import { UsersService } from 'src/users/users.service';
import { CreateUserInput } from '../users/dto/create-user.input';
import { User } from '../users/entities/user.entity';
export declare class AuthResolver {
    private usersService;
    constructor(usersService: UsersService);
    createUser(createUserInput: CreateUserInput): Promise<import(".prisma/client").User>;
    currentUser(user: User): Promise<User>;
}
