import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
export type IProps={
  navigate:Function
}
export const withRouter = (Child: React.ComponentType<any>) => {
  return (props: any) => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams<{ [key: string]: string }>();
    return (
      <Child
        {...props}
        navigate={navigate}
        location={location}
        useParams={params}
      />
    );
  };
};
