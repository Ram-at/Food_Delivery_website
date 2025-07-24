import { useRouteError } from "react-router-dom";

export const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h3>{err.status}</h3>
    </>
  );
};
