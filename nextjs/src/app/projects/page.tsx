import { ProjectsLibrary } from "@/src/components/projects-library";
import { Suspense } from "react";

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsLibrary />
    </Suspense>
  );
}
