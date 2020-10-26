import {NextPageContext} from "next";
import axios from "axios";

import BaseLayout from "../../components/layouts/BaseLayout";
import {IPortfolio} from "../../interfaces/portfolio";

type PropsType = {
  portfolio: IPortfolio
}

const Portfolio = ({portfolio}: PropsType) => {
  return (
    <BaseLayout>
      <h1>I am Portfolio page</h1>
      <h1>{portfolio.title}</h1>
      <p>BODY {portfolio.body}</p>
      <p>ID {portfolio.id}</p>
    </BaseLayout>
  )
}

Portfolio.getInitialProps = async ({query}:NextPageContext) => {
  let portfolio = null;

  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
    portfolio = res.data;
  } catch (e) {
    console.error(e)
  }

  return {portfolio}
}

export default Portfolio;