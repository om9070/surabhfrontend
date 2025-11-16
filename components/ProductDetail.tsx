// ProductDetail.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

interface ProductImage {
  src: string;
  alt: string;
}

interface ProductColor {
  name: string;
  value: string;
}

interface ProductDetailProps {
  name: string;
  description: string;
  images: ProductImage[];
  colors: ProductColor[];
  sizes: string[];
  defaultSize?: string;
  defaultQuantity?: number;
  id: number;
  price:number
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  name,
  description,
  images,
  colors,
  sizes,
  defaultSize = sizes[0],
  defaultQuantity = 1,
  id,
  price
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(defaultQuantity);

  const handleAddToWishlist = () => {
    console.log("Added to wishlist:", {
      name,
      selectedSize,
      selectedColor,
      quantity,
    });
    // Implement wishlist logic
  };

  const handleAddToBag = (id: number) => {
    toast("product added successfully.")
    
    const products: any = JSON.parse(localStorage.getItem("products") || "[]");

    if (!products.includes(id)) {
      products.push(id);
      localStorage.setItem("products", JSON.stringify(products));
    } else {
      toast(`Product already exists: ${id}`);
      console.log("Product already exists:", id);
    }
        window.dispatchEvent(new Event("Order"));

    // Implement add to cart logic
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="space-y-4">
          {/* Main Image */}
          {/* <div className="relative aspect-[3/4] bg-black overflow-hidden rounded-lg">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-cover"
              priority
            />
          </div> */}

          {/* <div className="relative w-full aspect-[3/4] sm:w-[300px] md:w-[400px] lg:w-[604px]">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div> */}

          <Image
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            width={604}
            height={791}
            className=" rounded-lg object-cover"
          />

          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative bg-gray-100 overflow-hidden rounded-lg transition-all ${
                  selectedImage === index
                    ? "ring-2 ring-black"
                    : "hover:opacity-75"
                }`}
              >
                {/* <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                /> */}

                <div className="relative w-[141px] h-[141px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="space-y-8">
          {/* Title */}
          <h1 className="text-5xl font-bold tracking-widest uppercase">
            {name}
          </h1>

          {/* Description */}
          <div className=" py-6">
            <p className="text-sm leading-relaxed">{description}</p>
          </div>

          <div className="flex gap-5">
            {/* Size Selector */}
            <div className="space-y-3">
              {/* <label className="block text-sm font-medium">Choose a size</label> */}
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-64 border-b border-gray-300 py-2  text-sm focus:outline-none focus:border-black"
                style={{
                  borderBottomRightRadius: "10px",
                  borderBottomLeftRadius: "10px ",
                }}
              >
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3">
              {/* <label className="block text-sm font-medium">Quantity</label> */}
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-64 border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black"
                style={{
                  borderBottomRightRadius: "10px",
                  borderBottomLeftRadius: "10px ",
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Color Selector */}
          <div className="space-y-3">
            <label className="block text-sm font-medium">Color</label>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`w-12 h-12 rounded border-2 transition-all ${
                    selectedColor.name === color.name
                      ? "border-black scale-110"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  style={{ backgroundColor: color.value }}
                  aria-label={color.name}
                />
              ))}
            </div>
          </div>

              <p className="text-xl">Price: {price}</p>


          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            {/* <button
              onClick={handleAddToWishlist}
              className="flex-1 py-4 border border-black text-black font-medium uppercase text-sm tracking-wider hover:bg-gray-100 transition-colors"
            >
              Add to my wishlist
            </button> */}
            <button
              onClick={() => handleAddToBag(id)}
              className="flex-1 py-4 bg-white border-2 border-red-600 text-black font-medium uppercase text-sm tracking-wider hover:bg-red-50 transition-colors"
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

// Example usage:
//
// import ProductDetail from '@/components/ProductDetail';
//
// export default function ProductPage() {
//   return (
//     <ProductDetail
//       name="Item Name"
//       description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in"
//       images={[
//         { src: '/images/product-1.jpg', alt: 'Product view 1' },
//         { src: '/images/product-2.jpg', alt: 'Product view 2' },
//         { src: '/images/product-3.jpg', alt: 'Product view 3' },
//         { src: '/images/product-4.jpg', alt: 'Product view 4' },
//       ]}
//       colors={[
//         { name: 'Brown', value: '#6B5D52' },
//         { name: 'Navy', value: '#2D2E54' },
//       ]}
//       sizes={['Small', 'Medium', 'Large', 'X-Large']}
//     />
//   );
// }
