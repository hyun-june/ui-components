import type { Meta, StoryObj } from "@storybook/react-vite";
import StatusBadge from "../components/Badge/StatusBadge";
import TagBadge from "../components/Badge/TagBadge";

const meta = {
  title: "shared/ui/StatusBadge",
  component: StatusBadge,
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof StatusBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  args: { status: "recruit" },
  render: () => {
    return (
      <div className="flex gap-2">
        <StatusBadge status="recruit" />
        <StatusBadge status="closed" />
        <StatusBadge status="auto" />
        <StatusBadge status="approve" />
        <StatusBadge status="deadline" />
        <TagBadge tags={["포트폴리오", "공모전"]} />
      </div>
    );
  },
};
