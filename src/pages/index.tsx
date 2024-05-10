import Header from "@/components/Header";
import TodoContainer from "@/components/TodoContainer";

export default function Home() {
  return (
    <main
      className={`flex flex-col`}
    >
      <Header />
      <TodoContainer />
    </main>
  );
}
