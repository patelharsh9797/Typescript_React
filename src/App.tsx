import NavBar from "./components/NavBar";
import PostLists from "./components/PostLists";

function App() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-teal-500 text-black">
        <NavBar />
      </header>
      <main className="container mx-auto px-6 py-8">
        <PostLists />
      </main>
    </>
  );
}

export default App;
