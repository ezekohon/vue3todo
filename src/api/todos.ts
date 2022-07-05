import { supabase } from '../../supabase'
import Todo from '../models/todo'

const getAllTodos =  async () => {
  const { data: todos, error } = await supabase
  .from<Todo[]>('todos')
  .select('*')

  return todos;
}

async function addTodo(todo: Todo): Promise<Todo | null> {
  try {
    const { data, error } = await supabase
    .from('todos')
    .insert(todo)
    .single()
  
    return data;
  }
  catch(error) {
    console.log('Error:', error)
    return null;
  }
}

export { getAllTodos, addTodo };