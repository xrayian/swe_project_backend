import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
  ValidateIf,
} from 'class-validator';

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
  @ValidateIf((o) => o.avatar !== undefined)
  avatar?: string;

  @IsString({ message: 'Bio must be a string' })
  bio?: string;
}
export class UpdateProfileDto {
  @IsString()
  @ValidateIf((o) => o.firstName !== undefined)
  firstName?: string;

  @IsString()
  @ValidateIf((o) => o.lastName !== undefined)
  lastName?: string;

  @IsUrl()
  @ValidateIf((o) => o.avatar !== undefined)
  avatar?: string;

  @IsString({ message: 'Bio must be a string' })
  @MinLength(10, { message: 'Bio must be at least 10 characters long' })
  @MaxLength(300, { message: 'Bio must be at most 300 characters long' })
  @ValidateIf((o) => o.bio !== undefined)
  bio?: string;
}
