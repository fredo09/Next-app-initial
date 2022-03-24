import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

const style = {
  color: "#0070f3",
  textDecoration: "underline",
};

export const ActiveLink = ({ text, href }) => {
  const router = useRouter();

  const { asPath } = router;

  return (
    <Link href={href}>
      <a style={asPath === href ? style : null}> {text}</a>
    </Link>
  );
};
