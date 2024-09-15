export const Card = ({
    amount,
    title,
    orders
}) => {
    return <div className = "bg-white rounded shadow-md p-4 flex-grow mt-3 h-fit " >
        <div className = "flex items-center gap-3 text-[#4D4D4D]">
            <h5 className="text-sm">
                {title}
            </h5>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
            </div>
        </div>
        <div>
            {orders ?  <div className = "flex justify-between items-center">
            <div className="text-2xl font-medium">
            {amount} 
            </div>
            <div className="flex items-center font-medium text-sm underline text-[#146EB4]">
                {orders}{">"}
            </div>
        </div> : <div className="text-2xl font-medium">{amount} </div>}
        </div>
    </div>
}