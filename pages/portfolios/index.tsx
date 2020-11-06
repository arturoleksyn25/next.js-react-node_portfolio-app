import Link from 'next/link';

import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import {useGetPosts} from 'actions'

const Portfolios = () => {
  const {data, error, loading} = useGetPosts();

  return (
    <BaseLayout>
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
