declare namespace SiteData {
  export interface Titles {
    title: string;
    companyName: string;
  }

  export interface Contacts {
    telephone: string;
    email: string;
    fbLink: string;
    instaLink: string;
  }

  export interface ActiveModules {
    Modules: string[];
    Hint: string;
  }

  export interface Value {
    id: number;
    name: string;
    pricePerUnit: number;
    unit: string;
    visible: boolean;
  }

  export interface PriceList {
    key: string;
    value: Value[];
  }

  export interface SiteData {
    Titles: Titles;
    rezerwacja: string;
    about: string;
    contacts: Contacts;
    realizacje: string[];
    uslugi: string[];
    ActiveModules: ActiveModules;
    PriceList: PriceList[];
  }
}

declare module 'SiteData' {
  export = SiteData;
}
