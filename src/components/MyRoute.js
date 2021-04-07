import { Route } from "react-router-dom";

const MyRoute = (props) => {

  return (
    <Route exact={props.exact} path={props.path}>
      {props.children}
    </Route>
  );
};

export default MyRoute;
