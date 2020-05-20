import AppError from '@shared/errors/AppError';

import FakeHashProvide from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepostirory from '../repositories/fakes/FakeUsersRepository';
import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepostirory: FakeUsersRepostirory;
let fakeHashProvide: FakeHashProvide;
let updateProfile: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepostirory = new FakeUsersRepostirory();
    fakeHashProvide = new FakeHashProvide();

    updateProfile = new UpdateProfileService(
      fakeUsersRepostirory,
      fakeHashProvide,
    );
  });

  it('should be able update the profile', async () => {
    const user = await fakeUsersRepostirory.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const updateUser = await updateProfile.execute({
      user_id: user.id,
      name: 'John Trê',
      email: 'johntre@exemple.com',
    });

    expect(updateUser.name).toBe('John Trê');
    expect(updateUser.email).toBe('johntre@exemple.com');
  });

  it('should not be able to change to another user email', async () => {
    await fakeUsersRepostirory.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const user = await fakeUsersRepostirory.create({
      name: 'Test',
      email: 'test@example.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Trê',
        email: 'johndoe@example.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update the password', async () => {
    const user = await fakeUsersRepostirory.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const updateUser = await updateProfile.execute({
      user_id: user.id,
      name: 'John Trê',
      email: 'johntre@exemple.com',
      old_password: '123456',
      password: '123123',
    });

    expect(updateUser.password).toBe('123123');
  });

  it('should not be able to update the password without old password', async () => {
    const user = await fakeUsersRepostirory.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Trê',
        email: 'johntre@exemple.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the password with wrong old password', async () => {
    const user = await fakeUsersRepostirory.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Trê',
        email: 'johntre@exemple.com',
        old_password: 'wrong-old-password',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
