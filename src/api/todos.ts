import { supabase } from '../../supabase'
import Todo from '../models/todo'

const getAllTodos =  async () => {
  const { data: todos, error } = await supabase
  .from<Todo>('todos')
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

async function updateTodo(id: number|undefined, is_done: boolean): Promise<void> {
  console.log('api');
  
  try {
    const { data, error } = await supabase
    .from('todos')
    .update({ is_done: is_done })
    .eq('id', id)
    .single()
  }
  catch(error) {
    console.log(error);
  }
}

export { getAllTodos, addTodo, updateTodo };