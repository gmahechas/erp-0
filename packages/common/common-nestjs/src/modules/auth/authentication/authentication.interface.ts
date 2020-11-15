export interface ILoginRequest {
  userName: string;
  userPassword: string;
}

export interface ILoginResponse {
  successAuthUser: boolean;
}