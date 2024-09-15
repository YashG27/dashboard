import { tableData } from "../data/tabledata"
import { useState } from "react";
export const Table = () => {
    const [isMounted, setIsMounted] = useState(false);

    return (<div className="overflow-x-auto">
    <table className="min-w-full bg-white">
      <colgroup>
        <col className="w-1/5" />
        <col className="w-1/5" />
        <col className="w-1/5" />
        <col className="w-1/5" />
        <col className="w-1/5" />
      </colgroup>
      <thead className="text-[#4D4D4D]">
        <tr className="bg-[#F2F2F2]">
          <th className="px-3 py-[10px] text-left text-xs font-medium tracking-wider rounded-l">
            Order ID
          </th>
          <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
            Status
          </th>
          <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
            Transaction ID
          </th>
          <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
            Refund Date
          </th>
          <th className="px-3 py-[10px] text-right text-sm font-medium tracking-wider rounded-r">
            Order Amount
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-[#E6E6E6]">
        {tableData.map((row, index) => (
          <tr className="text-sm relative" key={index}>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
              {row.orderId}
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
              <span
                className={`${
                  row.status === "Successful"
                    ? "bg-green-500"
                    : "bg-[#999999]"
                } w-[10px] h-[10px] rounded-full`}
              ></span>
              {row.status}
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
              {row.transactionId}
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
              {row.refundDate}
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
              {row.orderAmount}
            </td>
            {isMounted && index !== tableData.length - 1 && (
              <span className="absolute bg-[#E6E6E6] w-[calc(100%-20px)] h-[1px] bottom-0 left-[10px]"></span>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}