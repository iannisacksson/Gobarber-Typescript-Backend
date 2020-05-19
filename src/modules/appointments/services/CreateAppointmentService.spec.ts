import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepostirory from '../repositories/fakes/FakeAppointmentsRepostirory';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepostirory: FakeAppointmentsRepostirory;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepostirory = new FakeAppointmentsRepostirory();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepostirory,
    );
  });

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123456',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123456');
  });

  it('should not be able to create two appointments on the same time', async () => {
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
