import type { ComponentProps } from "react";
import { Badge } from "../Badge/Badge";
import { LightningBoltIcon, LockClosedIcon } from "@radix-ui/react-icons";

type BadgeVariant = ComponentProps<typeof Badge>["variant"];
interface BadgeStatus {
  label: string;
  type: BadgeVariant;
  icon: React.ReactNode;
}

const BADGE_STATUS = {
  auto: { label: "즉시 참여 가능", type: "auto", icon: <LightningBoltIcon /> },
  approve: {
    label: "승인 후 참여 가능",
    type: "approve",
    icon: <LockClosedIcon />,
  },
} satisfies Record<string, BadgeStatus>;

export function ApproveBadge({ status }: { status: "auto" | "approve" }) {
  const badge = BADGE_STATUS[status];
  return (
    <Badge variant={badge.type}>
      <span>{badge.icon}</span>
      {badge.label}
    </Badge>
  );
}
