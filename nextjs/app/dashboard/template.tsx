"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";

interface DashboardTemplateProps {
  children: ReactNode;
}

export default function DashboardTemplate({
  children,
}: DashboardTemplateProps) {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log('Template: Монтирование (произошла навигация)');
  }, []);

  return (
    <div className="flex flex-row min-h-[calc(100vh-2rem)] border-4 border-blue-500 rounded-xl m-4 overflow-hiddent">
      <aside className="w-64 bg-blue-50 p-6 border-r border-blue-100 flex flex-col">
        <div className="mb-8 text-xs font-bold text-blue-500 uppercase tracking-widest font-sans">
          Dashboard Template
        </div>

        <nav className="flex flex-col gap-4">
          <span className="font-bold text-sm text-zinc-400">Навигация</span>
          <Link
            href="/dashboard"
            className="text-zinc-950 hover:text-blue-600 transition-colors"
          >
            {" "}
            Главная{" "}
          </Link>
          <Link
            href="/dashboard/settings"
            className="text-zinc-950 hover:text-blue-600 transition-colors"
          >
            {" "}
            Настройки{" "}
          </Link>
        </nav>

        <div className="mt-auto pt-6 border-t border-blue-200">
          <label className="block text-[10px] font-bold text-blue-400 uppercase mb-2">
            Persistent State (Template)
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Текст сохраниться..."
            className="w-full p-2 text-sm border border-blue-200 rounded bg-white text-black focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </aside>

      <main className="flex-1 flex flex-col bg-white p-8">{children}</main>
    </div>
  );
}
