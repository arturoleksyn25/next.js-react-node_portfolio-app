import React from 'react';

import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import {withAuth} from "utils/auth0";
import {IUser} from "../interfaces/user";

type PropsType = {
    user: IUser,
    title: string
}

const OnlyAdminSSR = ({user, title}: PropsType) => {
    return (
        <BaseLayout
            user={user}
            loading={false}>
            <BasePage>
                <h1>
                    I am Admin SSR page - Hello {user?.name}
                </h1>
                <h2>{title}</h2>
            </BasePage>
        </BaseLayout>
    )
}

const getTitle = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res({title: 'My new title!'})
        }, 500)
    })
}

export const getServerSideProps = withAuth(async () => {
    const title = await getTitle();

    return title;
})('admin');

export default OnlyAdminSSR;