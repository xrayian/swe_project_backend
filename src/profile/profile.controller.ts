import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { profile } from 'console';
import { CreateProfileDto, UpdateProfileDto } from './dto/profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get('/all')
  getProfiles(): object {
    return this.profileService.getProfiles();
  }

  @Get('/:id')
  getProfileById(@Param('id', new ParseUUIDPipe()) id: string): object {
    const profile = this.profileService.getProfileById(id);
    if (!profile) {
      throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
    }
    return profile;
  }

  @Post('/create')
  createProfile(@Body() profileData: CreateProfileDto): object {
    
    return this.profileService.createProfile(profileData);
  }

  @Put('/:id')
  updateProfile(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() profileData: UpdateProfileDto,
  ): object {
    const profileIndex = this.profileService
      .getProfiles()
      .findIndex((p) => p.id === id);
    if (profileIndex === -1) {
      throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
    }
    return this.profileService.updateProfile(profileIndex, profileData);
  }
}
