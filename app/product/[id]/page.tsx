'use client'
import ProductDetail from "@/components/ProductDetail";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import cardData from "../../../configs/card_data.json";


export default function ProductPage() {
  const { id } = useParams<{ id: any }>(); // ✅ Type for route param
  const [found, setFound] = useState<any | null>(null);

  useEffect(() => {
    if (id) {
      const foundItem = (cardData as any).items.find((d:any) => d.id === Number(id));
      setFound(foundItem);
    }
  }, [id]);


  return (
    <ProductDetail
      name={found?.name}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in"
      images={[
        { src: `/images/db-images/${found?.image}`, alt: "Product view 1" },
        { src: "/images/db-images/product_image_2.jpg", alt: "Product view 2" },
        { src: "/images/db-images/product_image_3.jpg", alt: "Product view 3" },
        { src: "/images/db-images/product_image_5.jpg", alt: "Product view 4" },
      ]}
      colors={[
        { name: "Brown", value: "#6B5D52" },
        { name: "Navy", value: "#2D2E54" },
      ]}
      sizes={["Small", "Medium", "Large", "X-Large"]}
      id={id}
      price={found?.price}
    />
  );
}
