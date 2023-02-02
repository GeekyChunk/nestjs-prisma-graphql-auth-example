import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostsService {
  constructor (private prismaService: PrismaService) {}
  
  create(createPostInput: CreatePostInput) {
    return this.prismaService.post.create({
      data: createPostInput
    });
  }

  findAll() {
    return this.prismaService.post.findMany();
  }

  findOne(id: number) {
    return this.prismaService.post.findUniqueOrThrow({
      where: { id }
    });
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return this.prismaService.post.update({
      where: { id },
      data: updatePostInput
    });
  }

  remove(id: number) {
    return this.prismaService.post.delete({
      where: { id }
    });
  }
}
