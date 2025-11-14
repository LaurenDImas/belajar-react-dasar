import Todo from "./Todo.jsx";

export default function TodoList() {
  const data = [
    {
      id: 0,
      text : "Learn Html",
      isCompleted : true,
    },{
      id: 1,
      text : "Learn CSS",
      isCompleted : true,
    },{
      id: 2,
      text : "Learn Javascript",
      isCompleted : true,
    },{
      id: 3,
      text : "Learn ReactJS",
      isCompleted : false,
    },
  ]

  return (
    <ul>
      {data.map((todo) => (
        <Todo {...todo} key={todo.id}/>
      ))}
    </ul>
  )
}