import {ReactNode} from "react";

import Header from "components/shared/Header";
import {IUser} from 'interfaces/user';

type PropsType = {
  user: IUser,
  loading: boolean,
  children: ReactNode,
  className?: string
}

const BaseLayout = ({children, className, user, loading}: PropsType) => {
  return (
    <div className="layout-container">
      <Header
        user={user}
        loading={loading}
      />
      <main className={`cover ${className}`}>
        <div className="wrapper">
          {children}
        </div>
      </main>
    </div>
  )
}

export default BaseLayout;