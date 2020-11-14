import { Schema, Document } from 'mongoose';

import { IPerson } from './person.interface';

export const personSchema = new Schema({
  personIdentification: {
    type: String,
    required: true
  },
  personFirstName: {
    type: String
  },
  personSecondName: {
    type: String
  },
  personFirstSurname: {
    type: String
  },
  personSecondSurname: {
    type: String
  },
  personCompanyName: {
    type: String
  },
  companyId: {
    type: String,
    required: true
  },
  typePersonId: {
    type: String,
    required: true
  },
  typeIdentificationId: {
    type: String,
    required: true
  },
}, {
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
    }
  }
});

export class PersonDocument extends Document implements Partial<IPerson> {
  personIdentification: string;
  personFirstName: string;
  personSecondName: string;
  personFirstSurname: string;
  personSecondSurname: string;
  personCompanyName: string;
  companyId: string;
  typePersonId: string;
  typeIdentificationId: string;
}