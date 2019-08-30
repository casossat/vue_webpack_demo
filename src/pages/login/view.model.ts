import { login } from '../../rest-api/models/login';

const createEmptyLogin = (): login => ({
  name: '',
  password: ''
});

export { login, createEmptyLogin };