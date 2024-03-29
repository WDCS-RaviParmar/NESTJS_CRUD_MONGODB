import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/schemas/User.schema";
import { UserService } from "./users.service";
import { UsersController } from "./users.controller";
import { UserSettings, UserSettingSchema } from "src/schemas/UserSettings.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: User.name,
                schema: UserSchema
            },
            {
                name: UserSettings.name,
                schema: UserSettingSchema
            }
        ])
    ],
    providers: [UserService],
    controllers: [UsersController]
})

export class UserModule {}