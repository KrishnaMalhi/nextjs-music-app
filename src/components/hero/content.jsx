const { Container, Row } = require("react-bootstrap");

const Content = ({ children }) => {
  return (
    <div className="content">
      <Container fluid>
        <Row>{children}</Row>
      </Container>
    </div>
  );
};

export default Content;
