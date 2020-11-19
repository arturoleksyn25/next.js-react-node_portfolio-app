import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import PortfolioForm, {FormProps} from "components/PortfolioForm";
import withAuth from "hoc/withAuth";
import {IUser} from "interfaces/user";
import {Row, Col} from "reactstrap";

type PropsType = {
  user: IUser,
  loading: boolean
}

const PortfolioNew = ({user, loading}: PropsType) => {

  const CreatePortfolio = (data: FormProps) => {
    alert(JSON.stringify(data))
  }

  return (
    <BaseLayout
      user={user}
      loading={loading}>
      <BasePage header={'Create Portfolio'}>
        <Row>
          <Col md="8">
            <PortfolioForm onSubmit={CreatePortfolio}/>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(PortfolioNew)('admin');
