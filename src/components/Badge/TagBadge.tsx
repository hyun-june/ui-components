import Badge from "./Badge";

interface TagBadgeProps {
  tags: string[];
}

const TagBadge = ({ tags }: TagBadgeProps) => {
  return (
    <>
      {tags.map((tag) => (
        <Badge key={tag} variant="tag">
          # {tag}
        </Badge>
      ))}
    </>
  );
};

export default TagBadge;
