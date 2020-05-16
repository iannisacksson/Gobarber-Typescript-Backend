import AppError from '@shared/errors/AppError';

import FakeUsersRepostirory from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    const fakeUsersRepostirory = new FakeUsersRepostirory();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUsersRepostirory,
      fakeHashProvider,
    );

    const authenticateUser = new AuthenticateUserService(
      fakeUsersRepostirory,
      fakeHashProvider,
    );

    const user = await createUser.execute({
      name: 'Joe Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate with non existing user', async () => {
    const fakeUsersRepostirory = new FakeUsersRepostirory();
    const fakeHashProvider = new FakeHashProvider();

    const authenticateUser = new AuthenticateUserService(
      fakeUsersRepostirory,
      fakeHashProvider,
    );

    expect(
      authenticateUser.execute({
        email: 'johndoe@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    const fakeUsersRepostirory = new FakeUsersRepostirory();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUsersRepostirory,
      fakeHashProvider,
    );

    const authenticateUser = new AuthenticateUserService(
      fakeUsersRepostirory,
      fakeHashProvider,
    );

    await createUser.execute({
      name: 'Joe Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(
      authenticateUser.execute({
        email: 'johndoe@example.com',
        password: 'wrong-password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
