import React from 'react';

function Order() {
    return (
        <div className="mt-2">
            <div className="flex justify-between items-center mb-2"> 
                <h1 className="font-bold text-lg">ORDERS</h1>
                <div className="flex items-center">
                    <p className="font-bold text-sm mr-2">SORT BY </p>
                    <select className="text-sm">
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
            </div>
            <div className=" mt-0 overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr>
                            <th className="border-b  text-sm text-[#8d8d8d]">ITEMS</th>
                            <th className="border-b  text-sm text-[#8d8d8d]">QUANTITY</th>
                            <th className="border-b  text-sm text-[#8d8d8d] hidden md:table-cell">SIZE</th>
                            <th className="border-b text-sm text-[#8d8d8d] hidden md:table-cell">COLOR</th>
                            <th className="border-b  text-sm text-[#8d8d8d] hidden md:table-cell">DELIVERY INFO</th>
                            <th className="border-b text-sm text-[#8d8d8d]">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="p-4 text-sm">INXUI743</td>
                            <td className="p-4 text-sm">1</td>
                            <td className="p-4 text-sm hidden md:table-cell">34</td>
                            <td className="p-4 text-sm hidden md:table-cell">#756AUY</td>
                            <td className="p-4 text-sm hidden md:table-cell">Columbus Street, Irvine, CA, USA, 33.704636</td>
                            <td className="p-4 text-sm">Not Delivered</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-4 text-sm">INXUI743</td>
                            <td className="p-4 text-sm">1</td>
                            <td className="p-4 text-sm hidden md:table-cell">34</td>
                            <td className="p-4 text-sm hidden md:table-cell">#756AUY</td>
                            <td className="p-4 text-sm hidden md:table-cell">Columbus Street, Irvine, CA, USA, 33.704636</td>
                            <td className="p-4 text-sm">Not Delivered</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-4 text-sm">INXUI743</td>
                            <td className="p-4 text-sm">1</td>
                            <td className="p-4 text-sm hidden md:table-cell">34</td>
                            <td className="p-4 text-sm hidden md:table-cell">#756AUY</td>
                            <td className="p-4 text-sm hidden md:table-cell">Columbus Street, Irvine, CA, USA, 33.704636</td>
                            <td className="p-4 text-sm">Not Delivered</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-4 text-sm">INXUI743</td>
                            <td className="p-4 text-sm">1</td>
                            <td className="p-4 text-sm hidden md:table-cell">34</td>
                            <td className="p-4 text-sm hidden md:table-cell">#756AUY</td>
                            <td className="p-4 text-sm hidden md:table-cell">Columbus Street, Irvine, CA, USA, 33.704636</td>
                            <td className="p-4 text-sm">Not Delivered</td>
                        </tr>
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Order;