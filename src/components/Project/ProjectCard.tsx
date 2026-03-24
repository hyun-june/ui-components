import StatusBadge from "../Badge/StatusBadge";
import { ProjectBadge } from "./ProjectBadge";

export function ProjectCard() {
  return (
    <div className="h-130 w-105 rounded-[20px] border-2 border-[#334155] bg-[#1e293b] px-5 pt-10 pb-5">
      <div className="flex gap-2">
        <StatusBadge status="recruit" />
        <ProjectBadge />
      </div>
    </div>
  );
}
