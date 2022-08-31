export interface DataInterface {
  services: Services[];
  products: Products[];
  masters: Masters[];
}

export interface Services {
  name: string;
  img: string;
}
export interface Products {
  name: string;
  img: string;
}
export interface Masters {
  name: string;
  img: string;
}
