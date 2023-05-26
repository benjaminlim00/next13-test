import Link from "next/link";
import React from "react";
import { prisma } from "../db";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();

  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }

  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/");
}

const page = () => {
  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">New</h1>
      </header>

      <form action={createTodo}>
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-t
         rounded px-2 py-1 outline-none focus:border-slate-100 text-black"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-visible:outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-visible:outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
};

export default page;
