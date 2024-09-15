import { Card } from "./Card"

export const MainCard = ({
    title,
    amount,
    orders
}) => {
    return (
        <div className="hover:bg-[#0E4F82] bg-[#146EB4] text-white rounded shadow-md flex-grow m-3">
            <div className="flex items-center gap-3 px-4 py-2"> 
                <h5>
                    {title}
                </h5>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
            </div>
                <div className="flex justify-between px-4 py-2"> 
                    <div className ="text-2xl font-medium">
                        {amount}
                    </div>
                    <div className = "flex items-center underline text-sm font-medium">
                        {orders} {">"}
                    </div>
                </div>
            <div className=" flex flex-grow justify-between text-sm bg-[#0E4F82] px-6 py-2 text-[#F2F2F2] rounded-[8px]">
                <p>Next Payment Date:</p>
                <p>Today, 4:00PM</p>
            </div>
        </div>
);
}    