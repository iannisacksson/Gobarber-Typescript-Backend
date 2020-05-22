import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IFindAllInMonthFromProviderDTO from '../dtos/IFindAllInMonthFromProviderDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(Date: Date): Promise<Appointment | undefined>;
  findAllInMonthFromProvider(
    Date: IFindAllInMonthFromProviderDTO,
  ): Promise<Appointment[]>;
}
