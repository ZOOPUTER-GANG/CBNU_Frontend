import { useState } from 'react';
import { TodoType } from '@/interface/todo';

import TodoTemplete from '@/components/todo-templete';
import TodoRegist from '@/components/todo-regist';
import TodoList from '@/components/todo-list';

const Todo = () => {
  const [todo, setTodo] = useState<TodoType>({
    title: '',
    desc: '',
    selected: false,
  });

  const [todos, setTodos] = useState<TodoType[]>([]);

  const todoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, title: e.target.value });
  };

  const removeItem = (index: number) => {
    const filteredTodos = todos.filter(
      (item: TodoType, i: number) => i !== index,
    );
    setTodos(filteredTodos);
  };

  // 단일 할일정보 저장 이벤트 처리 함수
  const onSave = () => {
    //할일목록에 신규 할일 객체 추가
    setTodos([...todos, todo]);
  };

  return (
    <TodoTemplete>
      <TodoRegist
        todo={todo}
        onSave={onSave}
        todoChange={todoChange}
      ></TodoRegist>

      <TodoList todos={todos} removeItem={removeItem}></TodoList>
    </TodoTemplete>
  );
};

export default Todo;
