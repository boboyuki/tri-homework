import { Logo } from "../logo"
import { Menu } from "./menu"

export const NormalHeader = () => {
  return (<>
    <div className="d-flex align-middle justify-center min-w-[345px] p-[28px]">
      <div className="flex flex-row align-middle relative" >
        <h1 className="font-bold text-[30px] leading-[40px] text-center my-[76px]">白頭翁不吃小米</h1>
        <Logo className="absolute flex justify-center align-middle rounded-full right-[-75px] top-[50%] translate-y-[-50%] w-[97px] h-[97px] bg-white shadow-md"></Logo>
      </div>
      <Menu></Menu>
    </div>
  </>

  )
}