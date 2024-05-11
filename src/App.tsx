import { getInitials } from "./helpers";

function App({ name = "John Doe" }) {
  const initials = getInitials(name);
jhgasjhdgas
  return (
    <div className="bg-black h-screen w-screen flex gap-4 flex-col p-4">
      <span className="text-white text-xl capitalize">Hello {name}!</span>
      <div className="w-16 h-16 flex">
        <span
          className="text-black p-4 bg-white rounded-full flex flex-1 items-center justify-center text-lg font-bold"
          data-testid="initials"
        >
          {initials}
        </span>
      </div>
    </div>
  );
}

export default App;
