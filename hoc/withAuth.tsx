import React from "react";

import {useGetUser} from "actions/user";
import Redirect from "components/shared/Redirect";

const withAuth = (Component: React.FC<any>) => (props: any) => {
  const {data, loading} = useGetUser();

  if (loading) {
    return (
      <p>Loading...</p>
    )
  }

  return (!data) ? <Redirect to={'/api/v1/login'}/> : <Component user={data} loading={loading} {...props}/>
}


export default withAuth;