import axios from 'axios';
import {Link} from '../routes';

import BaseLayout from "../components/layouts/BaseLayout";
import {IPortfolio} from "../interfaces/portfolio"

type PropsType = {
  posts: IPortfolio[]
}

const Portfolios = ({posts}: PropsType) => {
  return (
    <BaseLayout>
      <h1>
        I am Portfolio page
      </h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link route={`/portfolios/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </BaseLayout>
  )
}

Portfolios.getInitialProps = async () => {
  let posts = [];

  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts = res.data;
  } catch (e) {
    console.error(e)
  }

  return {posts: posts.slice(0, 10)}
}

export default Portfolios;
