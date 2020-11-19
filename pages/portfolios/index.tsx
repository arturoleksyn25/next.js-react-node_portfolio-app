import {Row, Col} from 'reactstrap';
import {useRouter} from 'next/router';

import {useGetUser} from 'actions/user';
import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import PortfolioCard from "components/PortfolioCard";
import PortfoliosApi from "lib/api/portfolios";
import {IPortfolio} from 'interfaces/portfolio';

type PropsType = {
  portfolios: IPortfolio[]
}

const Portfolios = ({portfolios}: PropsType) => {
  const router = useRouter();
  const {data: user, loading} = useGetUser();

  return (
    <BaseLayout
      user={user}
      loading={loading}>
      <BasePage
        header={'Portfolio'}
        className={'portfolio-page'}>
        {loading && (
          <p>Loading data...</p>
        )}
        <Row>
          {portfolios && portfolios.map((portfolio: IPortfolio) => (
            <Col
              key={portfolio._id}
              onClick={() => {
                router.push(`/portfolios/[id]`, `/portfolios/${portfolio._id}`)
              }}
              md="4">
              <PortfolioCard portfolio={portfolio}/>
            </Col>
          ))}
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export async function getStaticProps() {
  const json = await new PortfoliosApi().getAll();
  const portfolios = json.data;

  return {
    props: {portfolios}
  }
}

export default Portfolios;
