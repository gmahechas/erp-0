import { Connection } from 'mongoose';

import { companySchema, CompanyDocument } from '@gmahechas/common-nestjs';

export const companyProviders = [
  {
    provide: CompanyDocument.name,
    useFactory: (connection: Connection) => connection.model('Company', companySchema, 'company'),
    inject: ['MONGODB_CONNECTION']
  },
];