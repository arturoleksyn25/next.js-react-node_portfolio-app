import {Container} from "reactstrap";
import {ReactNode} from "react";

type PropsType = {
  className?: string,
  children: ReactNode
}

const BasePage = ({className, children}: PropsType) => {
  return (
    <div className={`base-page ${className}`}>
      <Container>
        {children}
      </Container>
    </div>
  );
};

export default BasePage;