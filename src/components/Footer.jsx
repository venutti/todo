import classnames from "classnames";
import useTodos from "../hooks/use-todos";

export default function Footer() {
  const { remainingTodos, setTodoView, isActualView, clearCompletedTodos } =
    useTodos();

  const remainingText =
    remainingTodos !== 1
      ? `${remainingTodos} tareas restantes`
      : `${remainingTodos} tarea restante`;

  const filterButtons = [
    {
      label: "Todos",
      view: "all",
    },
    {
      label: "Completos",
      view: "completed",
    },
    {
      label: "Incompletos",
      view: "uncompleted",
    },
  ];

  const renderedFilterButtons = filterButtons.map((item) => {
    return (
      <button
        key={item.view}
        className={classnames("border-b", {
          "border-b-red-500": isActualView(item.view),
          "border-b-transparent": !isActualView(item.view),
        })}
        onClick={() => setTodoView(item.view)}
      >
        {item.label}
      </button>
    );
  });

  return (
    <div className="text-xs px-2 py-1 flex gap-1 items-center justify-between flex-col sm:flex-row">
      <p>{remainingText}</p>
      <div className="flex gap-2">{renderedFilterButtons}</div>
      <button onClick={clearCompletedTodos}>Borrar completos</button>
    </div>
  );
}
