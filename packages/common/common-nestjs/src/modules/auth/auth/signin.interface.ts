export interface ISigninRequest {
  userName: string;
  userPassword: string;
}

export interface ISigninResponse {
  successAuthUser: boolean;
}