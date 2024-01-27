import React from "react";
import { Loader } from "@mantine/core";

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Loader color="gray" size="xl" type="bars" />
    </div>
  );
};

export default Loading;
