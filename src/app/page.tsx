import Link from "next/link";
import React from "react";
import { prisma } from "./db";
import { TodoItem } from "./components/TodoItem";

const getTodos = async () => {
  return await prisma.todo.findMany();
};

async function toggleComplete(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({
    where: { id },
    data: { complete },
  });
  // console.log(id, complete);
}

const Home = async () => {
  const todos = await getTodos();

  // await prisma.todo.create({
  //   data: {
  //     title: "Buy milk",
  //     complete: false,
  //   },
  // });

  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-visible:outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleComplete={toggleComplete}>
            {todo.title}
          </TodoItem>
        ))}
      </ul>
    </>
  );
};

export default Home;
