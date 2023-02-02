import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
export declare class PostsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createPostInput: CreatePostInput): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Post[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post, never>;
    update(id: number, updatePostInput: UpdatePostInput): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post, never>;
}
