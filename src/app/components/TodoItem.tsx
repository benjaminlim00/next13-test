"use client";

import React, { type ReactNode } from "react";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  children: ReactNode;
  toggleComplete(id: string, complete: boolean): void;
};

export const TodoItem = ({
  id,
  title,
  complete,
  toggleComplete,
}: TodoItemProps) => {
  return (
    <li className="flex gap-1 items-center">
      <input
        type="checkbox"
        id={id}
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleComplete(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
};
