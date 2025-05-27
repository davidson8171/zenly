import Navbar from "@/components/navbar/navbar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="h-screen w-full flex flex-col">
      <Navbar />
    </div>
  );
}
