import AppError from '@shared/errors/AppError';

import FakeUsersRepostirory from '../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    const fakeUsersRepostirory = new FakeUsersRepostirory();

    const createUser = new CreateUserService(fakeUsersRepostirory);
    const authenticateUser = new AuthenticateUserService(fakeUsersRepostirory);

    await createUser.execute({
      name: 'Joe Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
  });
});
