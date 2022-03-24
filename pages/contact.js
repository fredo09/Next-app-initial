import React from "react";
import Link from "next/link";
import { MainLayout } from "./../components/MainLayout";

export default function Pricing() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>

      <h1 className="title">
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/about">Contact</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/Contact.js</code>
      </p>
    </MainLayout>
  );
}
