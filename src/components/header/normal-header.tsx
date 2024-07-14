import { Logo } from "../logo"
import { Menu } from "./menu"

export const NormalHeader = () => {
  return (<>
    <div className="d-flex align-middle justify-center min-w-[345px] p-[28px]">
      <h1 className="font-bold text-[30px] leading-[40px] text-center my-[76px]">白頭翁不吃小米</h1>
      <Menu></Menu>
      <Logo></Logo>
    </div>
  </>

  )
}