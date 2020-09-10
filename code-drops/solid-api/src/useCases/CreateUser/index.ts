import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository';
import { MailTrapMailProvider } from '../../providers/implementations/MailTrapMailProvider';

const mailTrapMailProvider = new MailTrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailTrapMailProvider
);

const createUserController = new CreateUserController(
  createUserUseCase
);

export { createUserUseCase, createUserController };
