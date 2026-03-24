import { Badge } from "./Badge";

interface TagBadgeProps {
  tags: string[];
}

const TagBadge = ({ tags }: TagBadgeProps) => {
  return (
    <>
      {tags.map((tag, index) => (
        <Badge key={`${tag}-${index}`} variant="tag">
          # {tag}
        </Badge>
      ))}
    </>
  );
};

export default TagBadge;
