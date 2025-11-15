export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-semibold mb-6">My Projects</h1>
      <p className="text-white mb-4">
        Here are some of the projects I've worked on:
      </p>

      <ul className="space-y-4 text-white">
        <li className="border p-4 rounded-md">Project One – Description goes here.</li>
        <li className="border p-4 rounded-md">Project Two – Description goes here.</li>
        <li className="border p-4 rounded-md">Project Three – Description goes here.</li>
      </ul>
    </div>
  );
}