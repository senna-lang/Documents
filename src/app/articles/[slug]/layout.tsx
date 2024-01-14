"use client";
import React from "react";
import { RecoilRoot } from "recoil";
import Provider from "./provider";

const recoilRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <Provider>{children}</Provider>
    </RecoilRoot>
  );
};

export default recoilRoot;
