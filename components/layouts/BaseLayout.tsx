import Header from "@/components/shared/Header";
import {ReactNode} from "react";

type PropsType = {
  children: ReactNode,
  className?: string
}

const BaseLayout: React.FC<PropsType> = ({children, className}: PropsType) => {
  return (
    <div className="layout-container">
      <Header />
      <main className={`cover ${className}`}>
        <div className="wrapper">
          {children}
        </div>
      </main>
    </div>
  )
}

export default BaseLayout;