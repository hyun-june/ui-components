import SuccessAnimation from "./components/animation/SuccessAnimation";
import { ProjectCard } from "./components/Project/ProjectCard";

function App() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SuccessAnimation />
      <ProjectCard />
    </div>
  );
}

export default App;
