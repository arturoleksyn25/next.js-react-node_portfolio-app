import {Container} from "reactstrap";
import {ReactNode} from "react";

type PropsType = {
  className?: string,
  header?: string,
  children: ReactNode
}

const BasePage = ({className, header, children}: PropsType) => {
  return (
    <div className={`base-page ${className}`}>
      <Container>
        {header && (
          <div className={'page-header'}>
            <h1 className={'page-header-title'}>{header}</h1>
          </div>
        )}
        {children}
      </Container>
    </div>
  );
};

export default BasePage;