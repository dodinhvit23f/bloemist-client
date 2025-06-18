import {tenant} from "@/lib/constant";
import {Page, ResponseApi} from "@/lib/types";

export async function fetchCategories() {
    const baseUrl = process.env.NEXT_PUBLIC_CATEGORIES!

    try {
        const response = await fetch(baseUrl, {
            method: "GET",
            headers: {
                "resource": `${tenant}`
            }
        });

        if (!response || response.status == 500) {
            return new Page({})
        }

        const responseApi = new ResponseApi(await response.json());
        return responseApi.data;
    } catch (error) {
        console.error('Failed to fetch categories:', error);
        throw error;
    }
}