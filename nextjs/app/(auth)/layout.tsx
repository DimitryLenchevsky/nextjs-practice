"use client";

import Link from "next/link";
import { type ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      Auth Layout <br></br>
      <main className="flex-1 flex flex-col bg-white p-8">{children}</main>
    </div>
  );
}
