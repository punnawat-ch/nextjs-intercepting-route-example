"use client";

import { Game } from "@/components";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex w-full justify-center gap-8">
      <Game />
      {/* <Game />
      <Game /> */}
    </div>
  );
}
