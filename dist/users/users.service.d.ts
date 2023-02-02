import { CreateUserInput } from 'src/users/dto/create-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findByUsername(username: string): Promise<import(".prisma/client").User>;
    findOne(id: number): Promise<import(".prisma/client").User>;
    create(createUserInput: CreateUserInput): Promise<import(".prisma/client").User>;
}
