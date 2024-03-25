import { Link } from "react-router-dom";
import { PageSection, Button } from "../components";

const Error = () => {
  return (
    <section>
      <PageSection name="404 Erro" /> <PageSection name="404 Erro" />
      <div className="container">
        <div className="h-[60vh] text-center">
          <h1 className="text-8xl font-medium">404 Not Found</h1>
          <p className="my-10">
            Your visited page not found. You may go home page.
          </p>
          <Link to="/">
            <Button label="Back to home page" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
