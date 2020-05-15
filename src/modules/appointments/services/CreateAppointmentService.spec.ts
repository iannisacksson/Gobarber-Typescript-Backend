import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepostirory from '../repositories/fakes/FakeAppointmentsRepostirory';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepostirory = new FakeAppointmentsRepostirory();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepostirory,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123456',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123456');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const fakeAppointmentsRepostirory = new FakeAppointmentsRepostirory();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepostirory,
    );

    const appointmentDate = new Date(2020, 4, 10, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '123456',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
