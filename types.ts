export interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: IAddress;
}
export interface IAddress {
  suite: string;
  city: string;
  zipcode: string;
}

export interface IPost {
  id: string;
  title: string;
  body: string;
}

export interface ISocials {
  id: number;
  icon: string;
  path: string;
}
