import React from "react";
import { Loader } from "@mantine/core";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader color="gray" size="xl" type="bars" />
    </div>
  );
};

export default Loading;
