import React from "react";
import Link from "next/link";
import { MainLayout } from "../../components/MainLayout";

export default function Pricing () {
  return (
    <MainLayout>
      <h1>pricing Page</h1>

      <h1 className="title">
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/about">Pricing</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/pricing.js</code>
      </p>
    </MainLayout>
  );
}
