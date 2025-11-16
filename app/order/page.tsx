"use client";
import React, { useEffect, useState } from "react";
import { API_URL } from "../join/JoinForm";
import items from "../../configs/card_data.json";
import { useRouter } from "next/navigation";

const App: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router=useRouter()
    const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');


  const getFunction = () => {
    const userData: any = JSON.parse(
      localStorage.getItem("user") || "[]"
    ) as any[];
    return userData;
  };

  // Fetch orders
  const fetchOrders = async () => {
    try {
      const res = await fetch(`${API_URL}/v1/stripe/getUsersOrders`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getFunction().token}`,
        },
      });
      const data: any = await res.json();
      console.log(data, "-----");
      setOrders(data.orders);
    } catch (err) {
      console.error("Error fetching orders:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();

     const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;

    // Check if token exists
    if (!user || !user?.token) {
      console.log("✅ Token found:", user?.token);
      // Redirect to home if token is available
      router.push("/");
    } 

  }, []);

  // if (loading) return <p>Loading orders...</p>;
 

  return (
    <div className="p-6">

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        // <table className="w-fit table-auto">
        //   <thead className="text-2xl">
        //     <tr>
        //        <th className="border-4 ">ID</th>
        //       <th className="border-4 ">name</th>
        //       <th className="border-4 ">Brand</th>
        //       <th className="border-4 ">Price</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     {orders.map((id,key) => (
        //       <tr className="text-xl mt-5 ">
        //         <td className="border border-indigo-600 p-2">{key+1}</td>
        //         <td className="border border-indigo-600 p-2">{items.items[id]?.brand}</td>
        //         <td className="border border-indigo-600 p-2">{items.items[id]?.price.toFixed(2)}</td>
        //         <td className="border border-indigo-600 p-2">{items.items[id]?.name}</td>
        //       </tr>
        //     ))}
        //   </tbody>
        // </table>

         <div className="min-h-screen bg-white p-8">
      <div className="">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold tracking-wider">ORDERS</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 uppercase tracking-wide">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest')}
              className="text-sm text-gray-500 border-none bg-transparent cursor-pointer focus:outline-none"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="text-left py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  BrandName
                </th>
                <th className="text-left py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="text-left py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="text-left py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Delivery Info
                </th>
                <th className="text-left py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((id) => (
                <tr key={id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">
                    {items.items[id]?.name}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-900">
                    {items.items[id]?.brand}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-900">
                    {items.items[id]?.rating}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-900">
                    {items.items[id]?.price}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-900 max-w-md">
                    {items.items[id]?.brand}-{items.items[id]?.price}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`text-sm font-medium ${
                        items.items[id]?.status !== 'delivered'
                          ? 'text-blue-600'
                          : 'text-red-600'
                      }`}
                    >
                      {items.items[id]?.status !== 'delivered' ? 'Delivered' : 'Not delivered'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
      )}
    </div>
  );
};

export default App;
