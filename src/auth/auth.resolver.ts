import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from 'src/users/users.service';
import { CreateUserInput } from '../users/dto/create-user.input';
import { User } from '../users/entities/user.entity';
import { CurrentUser } from './decorators/current-user.decorator';
import { GqlAuthGuard } from './guards/gql-auth.guard';

@Resolver()
export class AuthResolver {
    constructor(private usersService: UsersService) {}

    @Mutation(returns => User)
    async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
        return this.usersService.create(createUserInput)
    }

    @Query(returns => User)
    @UseGuards(GqlAuthGuard)
    async currentUser(@CurrentUser() user: User) {
        return user;
    } 
}
