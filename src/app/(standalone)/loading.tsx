"use client";

import { LoaderIcon } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <LoaderIcon className="size-6 animate-spin text-muted-foreground" />
    </div>
  );
};
export default LoadingPage;
