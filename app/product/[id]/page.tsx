import { notFound } from "next/navigation"
import { Suspense } from "react"
import ProductDetail from "@/components/product-detail"
import {fetchProductById} from "@/fetch/FetchOrder";
import {mapProduct} from "@/lib/utils";



export default async function ProductPage({params,}: { params: Promise<{ id: string }> }) {
  const {id} = await params
  const productId = Number.parseInt(id)
  const response =  await fetchProductById(productId.toString())
  const product = mapProduct(await response.data)

  if (!product) {
    notFound()
  }

  return (
      <div className="min-h-screen bg-white pt-20">
        <Suspense fallback={<div className="container mx-auto px-4 py-8">Đang tải...</div>}>
          <ProductDetail product={product} />
        </Suspense>
      </div>
  )
}
