import Alert from "react-bootstrap/Alert";

const NotFound = () => {
  return (
    <>
      <Alert variant="danger" className="mt-3">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>ERROR 404! NOT FOUND</p>
      </Alert>
    </>
  );
};
export default NotFound;
