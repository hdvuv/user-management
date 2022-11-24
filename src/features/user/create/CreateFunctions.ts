import * as yup from 'yup';
import { isValidEmail, isValidPhone } from '../../../shared/utils/Validation';
export interface ICreateInput1 {
  name: string;
  phone: string;
  email: string;
  address: string;
  sex: string;
}

export interface ICreateInput2 {
  job: string;
  position: string;
  company: string;
  workingAddress: string;
}

export const validationSchema1 = yup
  .object({
    name: yup.string().required('Not empty!'),
    sex: yup.string().required('Not empty!'),
    phone: yup
      .string()
      .required('Not empty!')
      .test('length', 'Length is 10!', (value) => value?.length == 10)
      .test('number', 'Number required!', (value) => isValidPhone(value)),
    email: yup
      .string()
      .required('Not empty!')
      .test('number', 'Format email x@y.z', (value) => isValidEmail(value)),
    address: yup.string().required('Not empty!'),
  })
  .required();

export const validationSchema2 = yup
  .object({
    job: yup.string().required('Not empty!'),
    position: yup.string().required('Not empty!'),
    company: yup.string().required('Not empty!'),
    workingAddress: yup.string().required('Not empty!'),
  })
  .required();
