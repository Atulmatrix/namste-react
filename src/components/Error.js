import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Error</h1>
      <h2>Something went wrong!!</h2>
      <h2>
        {err.status}:{err.statustext}
      </h2>
    </div>
  );
};

export default Error;
