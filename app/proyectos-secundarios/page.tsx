import { Projects } from "@/components/sections/Projects";
import { ClientBackground } from "@/components/ui/ClientBackground";

export default function SecondaryProjectsPage() {
  return (
    <>
      <ClientBackground />
      <main>
        <Projects variant="secondary" />
      </main>
    </>
  );
}
