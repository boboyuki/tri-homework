import { MobileHeader } from "./mobile-header"
import { NormalHeader } from "./normal-header"

export const Header = () => {
    return (<>
      <NormalHeader></NormalHeader>
      <MobileHeader></MobileHeader>
    </>)
}