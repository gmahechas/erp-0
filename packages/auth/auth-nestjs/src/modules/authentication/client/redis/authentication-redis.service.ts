import { Injectable } from '@nestjs/common';

import { Observable, of } from 'rxjs';

import { IEntityOne, ILoginRequest, ILoginResponse } from '@gmahechas/common-nestjs';

@Injectable()
export class AuthenticationRedisService {

  validate(data: ILoginRequest): Observable<IEntityOne<ILoginResponse>> {
    console.log(data);
    return of({ entity: { successAuthUser: false } });
  }

}
