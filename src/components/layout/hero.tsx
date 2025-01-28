import { Button } from "../ui/button";

export function Hero() {
  return (
    <main className="text-center">
      <div className="inline-block px-3 py-1 mb-6 text-sm bg-[#F0FDF9] dark:bg-[#2A2A2A] text-[#00B392] rounded-full">
        Built for and by Windsurf IDE enthusiasts
      </div>

      <h1 className="text-5xl font-bold mb-6 dark:text-white">
        <span className="text-[#00DDB3]">.windsurf</span>rules for your
        <div className="mt-2">workspace and development</div>
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Windsurf Rules to customize AI behavior, streamline your development
        workflow, and tailor code generation to your framework and language.
        Define how AI understands and works with your codebase.
      </p>

      <div className="flex justify-center gap-4">
        <Button variant="primary" className="px-6 py-3">
          Browse Rules
        </Button>
        <Button variant="secondary" className="px-6 py-3">
          Submit Rule
        </Button>
      </div>
    </main>
  );
}
