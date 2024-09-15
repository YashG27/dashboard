import { FaCaretDown} from "react-icons/fa6";
import speaker from '../assets/speaker.png' ;
import { SideBarOpen } from "../atoms/sidebarAtom";
import {useRecoilState } from "recoil";
import { GiHamburgerMenu } from "react-icons/gi";
export const Header = () => {

  const [isOpen, setIsOpen] = useRecoilState(SideBarOpen);
    return <div>
              <header className = "flex justify-between items-center gap-2 sticky border-b py-3 px-4 bg-[#FFFFFF]">
              <button
                className="block lg:hidden"
                onClick={() => {
                    setIsOpen((prev) => !prev)
                    console.log(isOpen)}}>
                <GiHamburgerMenu className="text-2xl" />
            </button>
          <h5 className='text-[#1A181E] font-medium text-xl'>Payouts</h5>
          <div className = "flex flex-grow items-center gap-[6px] text-[#4D4D4D]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
            <div className='hidden sm:block text-xs'> How it Works</div>
          </div >
            <div className = "flex text-[#808080] items-center bg-[#F2F2F2] px-2 py-1.5 flex-grow rounded gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-3 text-lg">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input  type = "text" className ="bg-transparent outline-none w-full bg-[#F2F2F2] text-[#808080] rounded" placeholder='Search features, tutorials, etc.'></input>
           </div>
          <div className = "flex items-center sm:flex-grow justify-end gap-2">
          <button className = "text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-2 sm:flex w-8 sm:w-10 sm:h-10 items-center justify-center">
              <img src={speaker} width={15} height={15} alt='speaker logo' ></img>
            </button>
            <button className = "bg-[#E6E6E6] rounded-full text-[#4D4D4D] sm:w-10 sm:h-10 p-1 flex items-center justify-center">
              <FaCaretDown className = "text-xl " />
            </button>
          </div>
      </header>
      
    </div>
    
}