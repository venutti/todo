import TodoTextInput from "./TodoTextInput";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function MainSection() {
  return (
    <main className="bg-zinc-100 rounded shadow text-gray-700 max-w-lg mx-auto">
      <TodoTextInput />
      <TodoList />
      <Footer />
    </main>
  );
}
