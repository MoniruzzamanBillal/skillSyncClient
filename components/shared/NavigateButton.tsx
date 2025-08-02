"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

type TProps = {
  route: string;
  label: string;
};

const NavigateButton = ({ route, label }: TProps) => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push(route)}
      className="mb-4 bg-prime100 hover:bg-prime200 cursor-pointer"
    >
      {label}
    </Button>
  );
};

export default NavigateButton;
