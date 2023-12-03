"use client";
import React from "react";
import { RecoilRoot } from "recoil";
import Layout from "./provider";

const recoilRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <Layout>{children}</Layout>
    </RecoilRoot>
  );
};

export default recoilRoot;
