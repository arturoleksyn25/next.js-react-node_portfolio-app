import {ReactNode} from "react";

import Header from "components/shared/Header";

type PropsType = {
  children: ReactNode,
  className?: string
}

const BaseLayout = ({children, className}: PropsType) => {
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