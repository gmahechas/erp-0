import mongoose from 'mongoose';

interface CountryAttrs {
  countryName: string;
  countryCode: string;
}

export interface CountryDocument extends mongoose.Document {
  countryName: string;
  countryCode: string;
}

interface CountryModel extends mongoose.Model<CountryDocument> {
  build(attrs: CountryAttrs): CountryDocument;
}

const countrySchema = new mongoose.Schema(
  {
    countryName: {
      type: String,
      required: true
    },
    countryCode: {
      type: String,
      required: true
    },
  }
);

countrySchema.statics.build = function (attrs: CountryAttrs) {
  return new CountryMongo(attrs);
};

export const CountryMongo = mongoose.model<CountryDocument, CountryModel>('Country', countrySchema, 'country');