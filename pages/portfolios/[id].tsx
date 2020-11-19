import {useGetUser} from 'actions/user';
import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import PortfoliosApi from "lib/api/portfolios";
import {IPortfolio} from "interfaces/portfolio";

type PropsType = {
  portfolio: IPortfolio
}

const Portfolio = ({portfolio}: PropsType) => {
  const {data, loading: loadingU} = useGetUser();

  return (
    <BaseLayout
      user={data}
      loading={loadingU}>
      <BasePage header={"Portfolio Detail"}>
        {JSON.stringify(portfolio)}
      </BasePage>
    </BaseLayout>
  )
}

// export async function getServerSideProps({query}: NextPageContext) {
//   const json = await new PortfoliosApi().getById(query.id);
//   const portfolio = json.data;
//
//   return {
//     props: {portfolio}
//   }
// }

export async function getStaticPaths() {
  const json = await new PortfoliosApi().getAll();
  const portfolios = json.data;

  const paths = portfolios.map(portfolio => {
    return {
      params: {id: portfolio._id}
    }
  })

  return {paths, fallback: false}
}

export async function getStaticProps({params}) {
  const json = await new PortfoliosApi().getById(params.id);
  const portfolio = json.data;

  return {
    props: {portfolio}
  }
}

export default Portfolio;