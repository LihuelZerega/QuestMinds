"use client";
import NavBar from "@/components/NavBar";
import { NextUIProvider } from "@nextui-org/react";
import GetStarted from "./GetStarted";

export default function Home() {
  return (
    <main>
      <NextUIProvider>
        {/* <NavBar /> */}
        <GetStarted />
      </NextUIProvider>
    </main>
  );
}
