import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/brain.png";

export const AcmeLogo = () => (
  <Image src={Logo} width={40} height={40} alt="logo" />
);
