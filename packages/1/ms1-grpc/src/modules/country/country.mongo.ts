import mongoose from 'mongoose';

interface CountryCreateInput {
  countryName: string;
  countryCode: string;
}

export interface CountryDocument extends mongoose.Document {
  countryName: string;
  countryCode: string;
}

interface CountryModel extends mongoose.Model<CountryDocument> {
  build(input: CountryCreateInput): CountryDocument;
}

const schemaCountry = new mongoose.Schema(
  {
    countryName: {
      type: String,
      required: true
    },
    countryCode: {
      type: String,
      required: true
    },
  },
  {
    versionKey: false,
    toObject: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      }
    }
  }
);

schemaCountry.statics.build = (input: CountryCreateInput) => {
  return new CountryMongo(input);
};

export const CountryMongo = mongoose.model<CountryDocument, CountryModel>('Country', schemaCountry, 'country');