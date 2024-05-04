import { getInitials } from "./helpers";

function App() {
  const name = "Juan";
  const initials = getInitials(name);

  return (
    <div className="bg-black h-screen w-screen flex gap-4 flex-col">
      <span className="text-white text-xl capitalize">Hello {name}!</span>
      <div>
        <span
          className="text-black p-4 bg-white rounded-full"
          data-testid="initials"
        >
          {initials}
        </span>
      </div>
    </div>
  );
}

export default App;
