import React from 'react';

import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import withAuth from "hoc/withAuth";
import {IUser} from "interfaces/user";

type PropsType = {
  user: IUser,
  loading: boolean
}

const OnlyAdmin = ({user, loading}: PropsType) => {
  return (
    <BaseLayout
      user={user}
      loading={loading}>
      <BasePage>
        <h1>
          I am Admin page - Hello {user.name}
        </h1>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(OnlyAdmin)('admin');