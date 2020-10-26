import Header from "../shared/Header";
import {ReactNode} from "react";

type PropsType = {
  children: ReactNode
}

const BaseLayout: React.FC<PropsType> = ({children}: PropsType) => {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}

export default BaseLayout;