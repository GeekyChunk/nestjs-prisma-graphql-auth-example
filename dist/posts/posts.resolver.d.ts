import { PostsService } from './posts.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
export declare class PostsResolver {
    private readonly postsService;
    constructor(postsService: PostsService);
    createPost(createPostInput: CreatePostInput): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Post[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post, never>;
    updatePost(updatePostInput: UpdatePostInput): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post, never>;
    removePost(id: number): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post, never>;
}
