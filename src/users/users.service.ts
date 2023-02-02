import { Injectable } from '@nestjs/common';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor (private prismaService: PrismaService) {}

    async findByUsername(username: string) {
        return this.prismaService.user.findUniqueOrThrow({
            where: { username }
        });
    }

    async findOne(id: number) {
        return this.prismaService.user.findUniqueOrThrow({
            where: { id }
        });
    }

    async create(createUserInput: CreateUserInput) {
        const salt = await bcrypt.genSalt();
        const { password, ...data } = createUserInput
        const hash = await bcrypt.hash(password, salt);
        
        return this.prismaService.user.create({
            data: {
                ...data,
                password: hash,
            }
        })
    }
}
