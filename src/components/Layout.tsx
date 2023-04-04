import { FC, ReactNode } from "react";
import NavSide from "./NavSide";

const Layout: FC< {children:ReactNode}> = ( {children} ) => {
return (
<div className="flex w-full">
<NavSide />
<div className="w-full p-5">
 {children}
</div>
</div>)
}
export default Layout;