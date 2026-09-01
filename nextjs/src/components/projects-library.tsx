"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState, useTransition } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Edge Authentication Service",
    desc: "Быстрая авторизация на базе Elysia и Redis, развернутая на Edge-функциях",
    category: "elysia",
    stars: 210,
    date: "2026-05-12",
  },
  {
    id: 2,
    title: "Realtime Chat Gateway",
    desc: "WebSocket-шлюз на Bun с поддержкой комнат и presence, масштабируется горизонтально",
    category: "bun",
    stars: 342,
    date: "2026-06-03",
  },
  {
    id: 3,
    title: "Serverless Image Pipeline",
    desc: "Конвейер обработки и оптимизации изображений на Cloudflare Workers с кэшированием в R2",
    category: "cloudflare",
    stars: 158,
    date: "2026-04-21",
  },
  {
    id: 4,
    title: "Type-safe API Gateway",
    desc: "API-шлюз с автогенерацией типов на tRPC и валидацией схем через Zod",
    category: "trpc",
    stars: 476,
    date: "2026-07-15",
  },
  {
    id: 5,
    title: "Distributed Rate Limiter",
    desc: "Легковесный rate-limiter на Redis с sliding window алгоритмом для микросервисов",
    category: "redis",
    stars: 289,
    date: "2026-03-08",
  },
  {
    id: 6,
    title: "Vector Search Microservice",
    desc: "Сервис семантического поиска на pgvector и Elysia с батчевой индексацией эмбеддингов",
    category: "postgres",
    stars: 197,
    date: "2026-08-02",
  },
];

export function ProjectsLibrary() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") || "",
  );

  const category = searchParams.get("category") || "all";
  const sort = searchParams.get("sort") || "newest";

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (searchQuery) {
        params.set("query", searchQuery);
      } else {
        params.delete("query");
      }

      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, pathname, router]);

  const filteredProjects = useMemo(() => {
    const urlQuery = searchParams.get("query") || "";

    return PROJECTS.filter((p) => {
      const matchesQuery =
        p.title.toLowerCase().includes(urlQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(urlQuery.toLowerCase());
      const matchesCategory = category === "all" || p.category === category;

      return matchesQuery && matchesCategory;
    }).sort((a, b) => {
      if (sort === "popular") {
        return b.stars - a.stars;
      }

      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [searchParams, category, sort]);

  const updateParams = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value && value !== "all") {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <div className="min-h-screen bg-black text-zinc-200 p-8 font-sans">
      <div className="max-w-6xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-5xl font-black text-white uppercase italic tracking-tighter mb-2">
            Project Library
          </h1>
          <p className="text-zinc-500 font-medium">
            Управление состоянием: Поиск, Фильтры, Сортировка.
          </p>
        </div>

        <div className="h-8 flex items-center">
          {isPending && (
            <div className="flex items-center gap-2 text-blue-500 text-xs font-bold uppercase animate-pulse">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              Синхронизация...
            </div>
          )}
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="space-y-8">
          <div className="space-y-3">
            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
              Поиск
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Название или описание..."
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
            />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
              Технология
            </label>
            <div className="flex flex-wrap gap-2">
              {["all", "elysia", "nextjs"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => updateParams("category", cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                    category === cat
                      ? "bg-blue-600 text-white"
                      : "bg-zinc-900 text-zinc-500 hover:bg-zinc-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
              Сортировка
            </label>
            <select
              value={sort}
              onChange={(e) => updateParams("sort", e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm outline-none"
            >
              <option value="newest">Сначала новые</option>
              <option value="popular">Самые популярные</option>
            </select>
          </div>
        </aside>

        <main className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl hover:border-blue-600/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold bg-blue-600/10 text-blue-500 px-2 py-1 rounded uppercase">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-600">
                    {project.stars} ★
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            ))}

            {filteredProjects.length === 0 && (
              <div className="col-span-full py-20 text-center border-2 border-dashed border-zinc-800 rounded-3xl">
                <p className="text-zinc-600 font-medium">Ничего не найдено</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
