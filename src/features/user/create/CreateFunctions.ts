import * as yup from 'yup';
import { LENGTH_VALIDATE, MESSAGE_VALIDATE, NAME_VALIDATE } from '../../../constants/Common';
import { isValidEmail, isValidPhone } from '../../../shared/utils/Validation';

/**
 * Interface for form data of Create1 screen
 */
export interface ICreateInput1 {
  name: string;
  phone: string;
  email: string;
  address: string;
  sex: string;
}

/**
 * Interface for form data of Create2 screen
 */
export interface ICreateInput2 {
  job: string;
  position: string;
  company: string;
  workingAddress: string;
}

/**
 * Validate data of Create1 screen
 */
export const validationSchema1 = yup
  .object({
    name: yup.string().required(MESSAGE_VALIDATE.NOT_EMPTY),
    sex: yup.string().required(MESSAGE_VALIDATE.NOT_EMPTY),
    phone: yup
      .string()
      .required(MESSAGE_VALIDATE.NOT_EMPTY)
      .test(
        NAME_VALIDATE.LENGTH,
        MESSAGE_VALIDATE.LENGTH_PHONE,
        (value) => value?.length == LENGTH_VALIDATE.PHONE
      )
      .test(NAME_VALIDATE.NUMBER, MESSAGE_VALIDATE.NUMBER_REQUIRE, (value) => isValidPhone(value)),
    email: yup
      .string()
      .required(MESSAGE_VALIDATE.NOT_EMPTY)
      .test(NAME_VALIDATE.FORMAT, MESSAGE_VALIDATE.INVALID_FORMAT_EMAIL, (value) =>
        isValidEmail(value)
      ),
    address: yup.string().required(MESSAGE_VALIDATE.NOT_EMPTY),
  })
  .required();

/**
 * Validate data of Create2 screen
 */
export const validationSchema2 = yup
  .object({
    address: yup.string().required(MESSAGE_VALIDATE.NOT_EMPTY),
    job: yup.string().required(MESSAGE_VALIDATE.NOT_EMPTY),
    position: yup.string().required(MESSAGE_VALIDATE.NOT_EMPTY),
    company: yup.string().required(MESSAGE_VALIDATE.NOT_EMPTY),
    workingAddress: yup.string().required(MESSAGE_VALIDATE.NOT_EMPTY),
  })
  .required();
