import {tenant} from "@/lib/constant";
import {Page, ResponseApi} from "@/lib/types";

export async function fetchOrdersByCategory(categoryId: number, page: number, size: number, sort: string, search: string) {
    const baseUrl = process.env.NEXT_PUBLIC_PRODUCTS!
    const queryParams = new URLSearchParams();

    if(categoryId > 0){
        queryParams.set("categoryId", categoryId.toString())
    }


    queryParams.set("page", page.toString())
    queryParams.set("size", size.toString())
    queryParams.set("sort", sort)

    if(search){
        queryParams.set("search", search)
    }

    const url = `${baseUrl}?${queryParams.toString()}`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "resource": `${tenant}`
            }
        });

        if (!response || response.status == 500) {
            return new Page({})
        }

        const responseApi = new ResponseApi(await response.json());
        return new Page(responseApi.data)
    } catch (error) {
        console.error("Failed to fetch orders:", error);
        throw error;
    }
}