import StatusBadge from "./components/Badge/StatusBadge";
import TagBadge from "./components/Badge/TagBadge";

function App() {
  return (
    <div>
      <StatusBadge status="recruiting" />
      <StatusBadge status="closed" />
      <StatusBadge status="auto" />
      <StatusBadge status="approve" />
      <StatusBadge status="deadline" />
      <TagBadge tags={["처음", "두번째"]} />
    </div>
  );
}

export default App;
