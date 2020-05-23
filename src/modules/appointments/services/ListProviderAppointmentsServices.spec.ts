import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepostirory';
import ListProviderAppointmentsServices from './ListProviderAppointmentsServices';

let fakeAppointmentsRepostitory: FakeAppointmentsRepository;
let listProviderAppointments: ListProviderAppointmentsServices;

describe('ListProvidersDayAvalabitiliry', () => {
  beforeEach(() => {
    fakeAppointmentsRepostitory = new FakeAppointmentsRepository();
    listProviderAppointments = new ListProviderAppointmentsServices(
      fakeAppointmentsRepostitory,
    );
  });

  it('should be able to list the appointments on a specific day', async () => {
    const appointment1 = await fakeAppointmentsRepostitory.create({
      provider_id: 'provider',
      user_id: '123321',
      date: new Date(2020, 4, 20, 14, 0, 0),
    });

    const appointment2 = await fakeAppointmentsRepostitory.create({
      provider_id: 'provider',
      user_id: '123321',
      date: new Date(2020, 4, 20, 15, 0, 0),
    });

    const availability = await listProviderAppointments.execute({
      provider_id: 'provider',
      year: 2020,
      month: 5,
      day: 20,
    });

    expect(availability).toEqual([appointment1, appointment2]);
  });
});
