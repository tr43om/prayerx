export const ACCESS_TOKEN = 'access-token';

export const BASE_URL = 'https://prayer.herokuapp.com';

export enum Routes {
  signin = 'SignIn',
  signup = 'SignUp',
  home = 'Home',
  board = 'Board',
  prayer = 'Prayer',
}

export enum Statuses {
  IDLE = 'IDLE',
  PENDING = 'PENDING',
  FAILED = 'FAILED',
  SUCCEEDED = 'SUCCEEDED',
}
