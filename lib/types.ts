export interface Product {
  id: number
  name: string
  code: string
  price: number
  ceremonyPrice: number
  imgUrl: string
  description?: string
  sellingTurn : number,
  categories: Category[],
  isBestSeller?: boolean
}

export interface Category {
  id: number
  name: string
}

export class ResponseApi {
  traceId?: string;
  message?: string;
  data?: any;
  extraMessage?:string;

  constructor(data: any) {
    this.traceId = data?.traceId || '';
    this.message = data?.message || '';
    this.data = data?.data || '';
    this.extraMessage = data?.extraMessage || ""
  }
}

export class Page {
  page: number;
  totalPage: number;
  pageSize: number;
  list: object[];

  constructor(data: any) {
    this.page = data?.page;
    this.totalPage = data?.totalPage;
    this.pageSize = data?.pageSize;
    this.list = data?.list;
  }
}