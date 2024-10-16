import type { Struct, Schema } from '@strapi/strapi';

export interface AdressAdress extends Struct.ComponentSchema {
  collectionName: 'components_adress_adresses';
  info: {
    displayName: 'adress';
    description: '';
  };
  attributes: {
    Adress: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    fullName: Schema.Attribute.String;
    AddressLine1: Schema.Attribute.String;
    AddressLine2: Schema.Attribute.String;
    City: Schema.Attribute.String;
    State: Schema.Attribute.String;
    PostalCode: Schema.Attribute.String;
    phoneNumber: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'adress.adress': AdressAdress;
    }
  }
}
