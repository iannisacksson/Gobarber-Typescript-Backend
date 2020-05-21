import AppError from '@shared/errors/AppError';

import FakeUsersRepostirory from '../repositories/fakes/FakeUsersRepository';
import ShowProfileService from './ShowProfileService';

let fakeUsersRepostirory: FakeUsersRepostirory;
let showProfile: ShowProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepostirory = new FakeUsersRepostirory();
    showProfile = new ShowProfileService(fakeUsersRepostirory);
  });

  it('should be able show the profile', async () => {
    const user = await fakeUsersRepostirory.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const profile = await showProfile.execute({
      user_id: user.id,
    });

    expect(profile.name).toBe('John Doe');
    expect(profile.email).toBe('johndoe@example.com');
  });

  it('should not be able show the profile from non-existing user', async () => {
    expect(
      showProfile.execute({
        user_id: 'non-existing-user-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
