import {clsx, type ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"
import {Category, Page, Product, ResponseApi} from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function mapProduct(item: any) {
  return {
    id: item?.id ?? 0,
    name: item?.name ?? "",
    code: item?.code ?? "",
    price: item?.price ?? 0,
    ceremonyPrice: item?.ceremonyPrice ?? 0,
    imgUrl: item?.imgUrl ?? "",
    description: item?.description ?? "",
    sellingTurn: item?.sellingTurn ?? 0,
    categories: item?.categories?.map((item: any): Category => ({
      id: item?.id ?? 0,
      name: item?.name ?? ""
    })),
    ceremony: item?.ceremony ?? false,
    isBestSeller: item?.sellingTurn ? item.sellingTurn > 100 : false
  }
}

export function mapProducts(page: Page) {
  return page?.list?.map((item: any): Product => (mapProduct(item))) ?? []
}

export function mapCategories(response: ResponseApi) {
  return response?.data?.map((item: any): Category => ({
    id: item.id ?? 0,
    name: item.name ?? ""
  })) ?? []
}

export const formatMoney = (value: any) => {
  return value.toLocaleString('en-US');
}