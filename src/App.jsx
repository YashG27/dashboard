import './App.css';
import { Card } from './components/Card';
import { MainCard } from './components/mainCard'; 
import { Header } from './components/Header';
import { Table } from './components/Table';
import { Sidebar } from './components/Sidebar';
import { RecoilRoot } from 'recoil';
function App() {
  return (
    <>
    <div className='flex'>
    <RecoilRoot>
    <Sidebar />
    </RecoilRoot>

    <div className='w-full p-2'>
      <RecoilRoot>
       <Header />
      </RecoilRoot>
      <div className = "flex justify-between m-3">
        <h5 className = "font-medium text-xl">
          Overview
        </h5>
        <button className = "flex border text-[#4D4D4D] items-center text-sm p-1 px-[14px] py-[6px] gap-3">
          This Month
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>
      <div className = "flex flex-wrap gap-5 mr-5">
        <MainCard title = {"Next Payout"} amount = {"₹2,312.23"} orders = "23 orders"/>
        <Card title = {"Amount pending"} amount = {"₹92,312.20"} orders = "13 orders"/>
        <Card title = {"Amount Processed"} amount = {"₹23,92,312.19"} />
    </div>
    <div className = "ml-3 flex flex-col gap-6">
      <h5 className = "font-medium">Transactions | This Month</h5>
      <div className = "flex gap-3">
        <button className = "bg-[#E6E6E6] text-[#808080] px-4 py-[6px] rounded-full text-sm">Payouts (22)</button>
        <button className = "bg-[#146EB4] text-[#FFFFFF] px-4 py-[6px] rounded-full text-sm ">Refunds (6)</button>
      </div>
    </div>

    <div className='flex flex-col px-3 pt-3 pb-2 gap-3 rounded-[8px] bg-white'>
      <div className = "flex justify-between items-center bg-white m-3 rounded-[8px]">
        <div className = "flex border border-[#D9D9D9] items-center text-[#808080] mt-3 text-sm p-1 pr-2 pl-2 gap-2 max-w-[300px] rounded w-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-3 text-lg">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input type = "text" placeholder = "Order ID or transactions ID" className = "outline-none w-full"></input>
        </div>
        <div className = "flex gap-3 text-sm">
          <button className = "flex border border-[#D9D9D9] text-[#4D4D4D] rounded items-center p-1 pl-2 pr-2 gap-1">
            Sort
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
            </svg>
          </button>
          <button className = "border border-[#D9D9D9] text-[#4D4D4D] rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5 w-7 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </button>
        </div>
      </div>
      <Table />
    </div>
  </div>
</div>
</>
  )
}

export default App
