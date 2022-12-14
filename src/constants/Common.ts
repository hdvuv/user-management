/**
 * Path of all screen of the system
 */
export const PATH = {
  HOME: '/',
  LIST: '/list',
  DETAIL: '/detail',
  CREATE1: '/create1',
  CREATE2: '/create2',
  CONFIRM: '/confirm',
  EDIT: '/edit',
  INVALID: '*',
  BASE_QUERY: 'http://localhost:4000/',
};

/**
 * Empty value, commonly used in set default value
 */
export const EMPTY = '';

/**
 * Question mark character appearing on url
 */
export const QUESTION_MARK = '?';

/**
 * Message for login failed because incorrect username or password
 */
export const ERROR_MSG = {
  INVALID_LOGIN: 'Invalid username and password!',
};

/**
 * Key to identify already logged in
 */
export const ACCESS_TOKEN_KEY = 'access-token';

/**
 * Value to identify already logged in
 */
export const LOGGED_STATUS = 'LOGGED';

/**
 * Params system
 */
export const PARAMS = {
  ID: 'id',
  ID_RANDOM: '1',
};

/**
 * Values for pagination feature
 */
export const PAGINATION = {
  PER_PAGE: 10,
  CURRENT_PAGE: 1,
};

/**
 * Message to validate
 */
export const MESSAGE_VALIDATE = {
  NOT_EMPTY: 'Not empty!',
  LENGTH_PHONE: 'Length is 10!',
  NUMBER_REQUIRE: 'Number required!',
  INVALID_FORMAT_EMAIL: 'Format email xxx@yyy.zzz',
};

/**
 * Name of validate
 */
export const NAME_VALIDATE = {
  LENGTH: 'length',
  NUMBER: 'number',
  FORMAT: 'format',
};

/**
 * Name of validate
 */
export const LENGTH_VALIDATE = {
  PHONE: 10,
};
