import  { useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { SideBarOpen } from "../atoms/sidebarAtom";
import { IoIosCloseCircle } from "react-icons/io";
import home from "../assets/icons/home.png"
import appearence from "../assets/icons/appearence.png"
import audience from "../assets/icons/audience.png"
import delivery from "../assets/icons/delivery.png"
import discounts from "../assets/icons/discounts.png"
import marketing from "../assets/icons/marketing.png"
import orders from "../assets/icons/orders.png"
import payouts from "../assets/icons/payouts.png"
import plugins from "../assets/icons/plugins.png"
import products from "../assets/icons/products.png"
import wallet from "../assets/icons/wallet.svg"
import nishyan  from "../assets/nishyan.png";
import analytics from "../assets/icons/analytics.png"
const menuLists = [
  {
    icon: home,
    name: "Home",
  },
  {
    icon: orders,
    name: "Orders",
  },
  {
    icon: products,
    name: "Products",
  },
  {
    icon: delivery,
    name: "Delivery",
  },
  {
    icon: marketing,
    name: "Marketing",
  },
  {
    icon: analytics,
    name: "Analytics",
  },
  {
    icon: payouts,
    name: "Payouts",
  },
  {
    icon: discounts,
    name: "Discounts",
  },
  {
    icon: audience,
    name: "Audience",
  },
  {
    icon: appearence,
    name: "Appearence",
  },
  {
    icon: plugins,
    name: "Plugins",
  },
];

export const Sidebar =  () => {
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useRecoilState(SideBarOpen);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


    return (
        <>
          <aside
            className={`fixed lg:sticky left-0 top-0 z-10 h-[100dvh] w-[250px] overflow-hidden transition-all duration-300 lg:max-w-[224px] ${
              isOpen
                ? "translate-x-0 opacity-100 pointer-events-auto"
                : "-translate-x-full lg:translate-x-0 opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto"
            }`}
          >
            <div className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
            <button
              className={`${isOpen ? "fixed" : "hidden"} top-5 right-4 lg:hidden`}
              onClick={handleToggleModal}
            >
              <IoIosCloseCircle className="text-white text-3xl"/>
            </button>
            <div
              className={`relative mr-auto transition-transform duration-300 ease-in-out flex flex-col max-w-[224px] px-2 py-4 h-[100dvh] gap-4 bg-[#1E2640] justify-between ${
                isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
              }`}
              ref={modalRef}
            >
              <div className="w-full flex flex-col gap-6 items-center">
                <div className="flex gap-3 text-[#FFFFFF] items-center w-fit mx-auto">
                  <div className=" bg-white w-[39px] h-[39px] m-[0.5px] rounded-[4px] relative">
                    <img
                      src={nishyan}
                      alt="nishyanLogo"
                      className="object-cover object-center"
                      />
                  </div>
                  <div className="flex flex-col gap-1 w-[108px] justify-center">
                    <h3 className="font-medium text-[15px] leading-[22px]">Nishyan</h3>
                    <a
                      href={"#"}
                      className="underline leading-[16px] text-[13px] font-extralight w-fit text-[#D2D4D9]"
                    >
                      Visit Store
                    </a>
                  </div>
                  <FaChevronDown className="w-[20px] h-[20px]" />
                </div>
                <div className="w-full flex-col gap-4">
                  {menuLists.map((item) => (
                    <a
                      key={item.name}
                      href={"#"}
                      className={`${
                        item.name === "Payouts" ? "bg-[#FFFFFF]/10" : ""
                      } px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10`}
                    >
                      <div className="relative w-[18px] h-[18px]">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="object-contain object-center"
                        />
                      </div>
                      <p className="text-[14px] font-medium">{item.name}</p>
                    </a>
                  ))}
                </div>
              </div>
              <div className="py-[6px] px-3 bg-[#353C53] mx-2 rounded">
                <div className="flex gap-3 items-center">
                  <div className="w-9 h-9 bg-[#FFFFFF]/10 rounded p-[6px] flex justify-center items-center">
                    <img src={wallet} alt="wallet_icon" width={23.65} height={19.6}/>
                  </div>
                  <div className="flex flex-col text-white gap-[2px]">
                    <h3 className="text-[13px] text-[#FFFFFF] font-light">Available Credits</h3>
                    <h6 className="text-base font-medium">224.10</h6>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </>
      );
    };
