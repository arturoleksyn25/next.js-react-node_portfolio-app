import Link from 'next/link';

import {useGetPosts} from 'actions';
import {useGetUser} from 'actions/user';
import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";

const Portfolios = () => {
  const {data, error, loading} = useGetPosts();
  const {data: user, loading: loadingU} = useGetUser();

  return (
    <BaseLayout
      user={user}
      loading={loadingU}>
      <BasePage>
        <h1>
          I am Portfolio page
        </h1>
        {loading && (
          <p>Loading data...</p>
        )}
        {data && (
          <ul>
            {data.map(post => (
              <li key={post.id}>
                <Link as={`/portfolios/${post.id}`} href={"/portfolios/[id]"}>
                  <a>{post.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {error && (
          <div className={'alert alert-danger'}>{error.message}</div>
        )}
      </BasePage>
    </BaseLayout>
  )
}

export default Portfolios;
