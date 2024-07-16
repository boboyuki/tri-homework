import { Menu } from "./menu";

export const MobileHeader = () => {
    return (
        <div className="mobile-header">
            <h1 className="font-bold text-[30px] leading-[40px] text-center my-[76px]">白頭翁不吃小米</h1>
            <Menu></Menu>
        </div>
    );
}