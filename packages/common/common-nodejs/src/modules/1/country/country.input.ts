export interface ICountryCreate {
  countryName: string;
  countryCode: string;
}

export interface ICountryUpdate {
  id: string;
  countryName: string;
  countryCode: string;
}