import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';
import { PostModule } from './posts/Posts.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://127.0.0.1/nest_crud"),
    UserModule,
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}