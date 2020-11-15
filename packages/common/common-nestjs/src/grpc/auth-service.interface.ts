import { Observable } from 'rxjs';

import { IEntityOne } from './entity-one.interface';
import { ILoginRequest, ILoginResponse } from '../modules/auth/authentication/authentication.interface';

export interface IAuthService {
  login(data: IEntityOne<ILoginRequest>): Observable<IEntityOne<ILoginResponse>>;
}