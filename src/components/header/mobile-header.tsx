import { useState } from "react";
import { Logo } from "../logo";
import { Menu } from "./menu";

export const MobileHeader = () => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className="flex md:hidden flex-col">
            <div className="flex justify-between items-center px-[26px] my-[36px]">
                <label htmlFor="menu" className="flex flex-col justify-center items-middle">
                    <input type="checkbox" id="menu" className="hidden peer" checked={isChecked} onChange={() => setIsChecked(!isChecked)}></input>
                    <div className="w-[24px] h-[4px] relative top-0 bg-black peer-checked:rotate-45 peer-checked:translate-y-[2px]"></div>
                    <div className="w-[15px] h-[4px] relative top-0 bg-black my-[4px] peer-checked:hidden"></div>
                    <div className="w-[24px] h-[4px] relative top-0 bg-black peer-checked:-rotate-45 peer-checked:translate-y-[-2px]"></div>
                </label>
                <h1 className="font-bold text-[20px] text-center">白頭翁不吃小米</h1>
                <Logo className={'flex justify-center items-middle rounded-full w-[48px] h-[48px] bg-white shadow-md'}></Logo>
            </div>
            <Menu className={`transition-all ease-in-out ${isChecked ? 'h-auto pb-[36px]' : 'h-0 overflow-hidden'}`}></Menu>
        </div>
    );
}