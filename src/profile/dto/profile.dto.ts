import { IsEmail, IsString, IsUrl } from "class-validator";

export class ProfileDto {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar?: string;
    bio?: string;
    createdAt: Date;
    updatedAt: Date;
}

export class CreateProfileDto {
    @IsString()
    firstName: string;
    
    @IsString()
    lastName: string;

    @IsEmail()
    email: string;

    @IsUrl()
    avatar?: string;

    @IsString()
    bio?: string;
}

export class UpdateProfileDto {
    @IsString()
    firstName?: string;

    @IsString()
    lastName?: string;

    @IsUrl()
    avatar?: string;

    @IsString()
    bio?: string;
}