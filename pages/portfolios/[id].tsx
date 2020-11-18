import {useRouter} from 'next/router';

import {useGetPostsById} from 'actions';
import {useGetUser} from 'actions/user';
import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";

const Portfolio = () => {
  const router = useRouter();
  const {data: portfolio, error, loading} = useGetPostsById(router.query.id);
  const {data, loading: loadingU} = useGetUser();

  return (
    <BaseLayout
      user={data}
      loading={loadingU}>
      <BasePage>
        {loading && (
          <p>Loading data...</p>
        )}
        {error && (
          <div className={'alert alert-danger'}>{error.message}</div>
        )}
        {portfolio && (
          <>
            <h1>I am Portfolio page</h1>
            <h1>{portfolio.title}</h1>
            <p>BODY {portfolio.body}</p>
            <p>ID {portfolio.id}</p>
          </>
        )}
      </BasePage>
    </BaseLayout>
  )
}

export default Portfolio;