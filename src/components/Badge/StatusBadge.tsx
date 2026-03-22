import type React from "react";
import Badge from "./Badge";
import type { ComponentProps } from "react";
import { LightningBoltIcon, LockClosedIcon } from "@radix-ui/react-icons";

type BadgeVariant = ComponentProps<typeof Badge>["variant"];

interface BadgeStatus {
  label: string;
  type: BadgeVariant;
  icon?: React.ReactNode;
}

const BADGE_STATUS = {
  recruiting: { label: "모집중", type: "recruit" },
  closed: { label: "모집완료", type: "closed" },
  auto: { label: "즉시 참여 가능", type: "auto", icon: <LightningBoltIcon /> },
  approve: {
    label: "승인 후 참여 가능",
    type: "approve",
    icon: <LockClosedIcon />,
  },
  deadline: { label: "모집마감", type: "deadline" },
} satisfies Record<string, BadgeStatus>;

type StatusKey = keyof typeof BADGE_STATUS;

const StatusBadge = ({ status }: { status: StatusKey }) => {
  const endDate = "2026-03-30";
  const end = new Date(endDate);
  const today = new Date();

  const diff = end.getTime() - today.getTime();
  const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));

  if (!status) return;
  const badge: BadgeStatus = BADGE_STATUS[status];

  return (
    <Badge variant={badge.type}>
      {badge.icon && <span>{badge.icon}</span>}

      {badge.label}
      {status === "deadline" && ` D-${diffDays}`}
    </Badge>
  );
};

export default StatusBadge;
