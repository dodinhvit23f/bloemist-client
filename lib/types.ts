export interface Product {
  id: number
  name: string
  code: string
  price: number
  image: string
  category: "bouquet" | "vase" | "seasonal"
  isBestSeller?: boolean
  description?: string
}
