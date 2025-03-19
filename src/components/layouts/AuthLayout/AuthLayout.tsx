import PageHead from "@/components/commons/PageHead";
import React, { Fragment, ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
  title?: string;
}
const AuthLayout = (props: PropTypes) => {
  const { children, title } = props;
  return (
    <Fragment>
      <PageHead title={title} />
      <section className="max-w-screen-3xl 3xl:container flex p-8">
        {children}
      </section>
    </Fragment>
  );
};

export default AuthLayout;
