import * as model from '../../rest-api/models/login';
import * as vm from './view.model';

export const mapLoginVmToModel = (login: vm.login): model.login => ({
  ...login,
})