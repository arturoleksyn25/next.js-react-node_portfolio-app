import React from "react";

import {useGetUser} from "actions/user";
import Redirect from "components/shared/Redirect";
import {isAuthorized} from "utils/auth0";

const withAuth = (Component: React.FC<any>) => (role?: string) => {
  return (props: any) => {
    const {data, loading} = useGetUser();

    if (loading) {
      return (
          <p>Loading...</p>
      )
    }

    if (!data) {
      return <Redirect to={'/api/v1/login'}/>;
    } else {
      return (role && !isAuthorized(data, role)) ? <Redirect to={'/api/v1/login'}/> : <Component user={data} loading={loading} {...props}/>
    }
  }
}


export default withAuth;