import { login } from '../../models/login';

export const loginRequest = (log: login): Promise<boolean> => (
  isValidLogin(log) ? Promise.resolve(true) : Promise.reject('Not valid login')
);

const isValidLogin = (log: login) => (
  log.name === 'admin' && log.password == 'admin'
);