import PageHead from "@/components/commons/PageHead";
import React, { Fragment, ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
  title?: string;
}

const AuthLayout = (props: PropTypes) => {
  const { children, title } = props;
  return (
    <div className="lg:py flex min-h-screen min-w-full flex-col items-center justify-center gap-10 py-10">
      <PageHead title={title} />
      <section className="max-w-screen-3xl 3xl:container flex p-8">
        {children}
      </section>
    </div>
  );
};

export default AuthLayout;
