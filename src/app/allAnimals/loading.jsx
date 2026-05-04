import { Spinner } from "@heroui/react";
import Link from "next/link";
import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Spinner size="xl" />
      <span className="text-xs text-muted">Extra Large</span>
    </div>
  );
};

export default loading;
