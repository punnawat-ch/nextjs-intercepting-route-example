"use client";
import { Sidebar } from "@/components";
import { AuthProvider } from "@/contexts";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

export const App = ({ children }: PropsWithChildren) => {
  return (
    <>
      <AuthProvider>
        <Sidebar />
        <main className="lg:pl-72 py-4">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </AuthProvider>
    </>
  );
};
