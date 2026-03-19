import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto, ProfileDto } from './dto/profile.dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class ProfileService {
    profiles: ProfileDto[] = [
        {
            id: 'b0c1c908-9b2f-4e4c-a6d5-3b2d9e6d4a2e',
            firstName: 'Ava',
            lastName: 'Martinez',
            email: 'ava.martinez@example.com',
            bio: 'Frontend engineer who loves design systems.',
            createdAt: new Date('2024-06-01T10:12:00Z'),
            updatedAt: new Date('2024-06-10T14:45:00Z')
        },
        {
            id: '5fbcf4c6-1ac7-4d2a-b9f9-61e1fb4f4e73',
            firstName: 'Noah',
            lastName: 'Kim',
            email: 'noah.kim@example.com',
            bio: 'Backend developer focused on scalable APIs.',
            createdAt: new Date('2024-05-15T08:30:00Z'),
            updatedAt: new Date('2024-06-02T16:20:00Z')
        },
        {
            id: '2c2a77e6-1e6f-4bcb-92b0-5b3a8b9f1f54',
            firstName: 'Liam',
            lastName: 'Patel',
            email: 'liam.patel@example.com',
            bio: 'Product manager with a knack for data.',
            createdAt: new Date('2024-04-20T12:00:00Z'),
            updatedAt: new Date('2024-05-05T09:10:00Z')
        },
        {
            id: 'd83b6f6f-3d3d-4b1c-8a8e-1f3f50b3f0f9',
            firstName: 'Emma',
            lastName: 'Nguyen',
            email: 'emma.nguyen@example.com',
            bio: 'QA analyst who automates everything.',
            createdAt: new Date('2024-03-08T15:40:00Z'),
            updatedAt: new Date('2024-03-21T11:05:00Z')
        },
        {
            id: '8b38f965-6f4d-4c6b-8f63-1d0f6b8b9caa',
            firstName: 'Olivia',
            lastName: 'Johnson',
            email: 'olivia.johnson@example.com',
            bio: 'UX researcher who champions accessibility.',
            createdAt: new Date('2024-02-12T09:25:00Z'),
            updatedAt: new Date('2024-02-28T18:00:00Z')
        }
    ];

    getProfiles(): ProfileDto[] {
        return this.profiles; // Return all profiles
    }

    getProfileById(id: string): ProfileDto | undefined {
        const profile = this.profiles.find(p => p.id === id);
        return profile; // Return the profile or a not found message
    }

    createProfile(profileData: CreateProfileDto): ProfileDto {
        const newProfile = {
            id: randomUUID(),
            ...profileData,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        this.profiles.push(newProfile);
        return newProfile; // Return the newly created profile
    }

    updateProfile(id: string, profileData: Partial<CreateProfileDto>): ProfileDto {
        const profileIndex = this.profiles.findIndex(p => p.id === id);
        if (profileIndex === -1) {
            throw new Error('Profile not found');
        }
        const updatedProfile = {
            ...this.profiles[profileIndex],
            ...profileData,
            updatedAt: new Date()
        };
        this.profiles[profileIndex] = updatedProfile;
        return this.profiles[profileIndex]; // Return the updated profile
    }
}
