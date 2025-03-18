import PageHead from "@/components/commons/PageHead";
import React, { ReactNode } from "react";

interface PropTypes {
  title?: string;
  children: ReactNode;
}
const AuthLayout = (props: PropTypes) => {
  const { title, children } = props;
  return (
    <>
      <PageHead title={title} />
      <section className="flex max-w-screen-3xl 3xl:container p-8">{children}</section>
    </>
  );
};

export default AuthLayout;
