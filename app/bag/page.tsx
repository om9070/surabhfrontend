"use client";
import Empty from "@/components/bag/Empty";
import Item from "@/components/bag/Item";
import React, { useEffect, useState } from "react";
import cardData from "../../configs/card_data.json";

export default function Page() {
  const [empty, setEmpty] = useState(false);
  const [data, setdata] = useState<any>([]);

  useEffect(() => {
    const products: any = JSON.parse(localStorage.getItem("products") || "[]");
    const filteredProducts: any = cardData.items.filter((product: any) =>
      products.includes(String(product.id))
    );
    if (!!filteredProducts.length) {
      setEmpty(false);
      setdata(filteredProducts);
    } else {
      setEmpty(true);
    }
  }, []);

  return <>{empty ? <Empty /> : <Item data={data} />}</>;
}
