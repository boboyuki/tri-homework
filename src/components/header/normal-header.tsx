import { Logo } from "../logo"
import { Menu } from "./menu"

export const NormalHeader = () => {
  return (<>
    <div className="hidden md:flex flex-col max-w-[345px] w-screen p-[28px]">
      <div className="flex flex-row items-middle w-auto text-center relative" >
        <h1 className="font-bold flex-1 text-[30px] leading-[40px] my-[76px]">白頭翁不吃小米</h1>
        <Logo className="absolute flex justify-center items-middle rounded-full right-[-75px] top-[50%] translate-y-[-50%] w-[97px] h-[97px] bg-white shadow-md"></Logo>
      </div>
      <Menu></Menu>
    </div>
  </>

  )
}