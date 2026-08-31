"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

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

export default function ProjectsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") || "",
  );

  const category = searchParams.get("category") || "all";
  const sort = searchParams.get("sort") || "newest";

  return <div>Projects</div>;
}
