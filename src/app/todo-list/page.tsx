"use client"
import { useState } from 'react';

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

import {
  Container,
  TextField,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Typography,
  Divider,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

const Page = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState<string>('');
  const [newTodoDescription, setNewTodoDescription] = useState<string>('');
  const [filter, setFilter] = useState<'all' | 'completed' | 'uncompleted'>('all');

  // Function to add a new todo item
  const addTodo = () => {
    if (newTodoTitle.trim() === '' || newTodoDescription.trim() === '') return;

    const newTodo: Todo = {
      id: Date.now(),
      title: newTodoTitle,
      description: newTodoDescription,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setNewTodoTitle('');
    setNewTodoDescription('');
  };

  // Function to toggle a todo's completion status
  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Filter the todos based on the filter state
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'uncompleted') return !todo.completed;
    return true;
  });

  return (
    <Container maxWidth="sm">
      <Box mt={4} mb={2}>
        <Typography variant="h4" gutterBottom>
          To-Do List
        </Typography>
        <TextField
          fullWidth
          label="Todo Title"
          variant="outlined"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Todo Description"
          variant="outlined"
          value={newTodoDescription}
          onChange={(e) => setNewTodoDescription(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" onClick={addTodo}>
          Add To-Do
        </Button>
      </Box>

      <Box mt={4} mb={2}>
        <Button
          variant={filter === 'all' ? 'contained' : 'outlined'}
          onClick={() => setFilter('all')}
          sx={{ mr: 1 }}
        >
          All
        </Button>
        <Button
          variant={filter === 'completed' ? 'contained' : 'outlined'}
          onClick={() => setFilter('completed')}
          sx={{ mr: 1 }}
        >
          Completed
        </Button>
        <Button
          variant={filter === 'uncompleted' ? 'contained' : 'outlined'}
          onClick={() => setFilter('uncompleted')}
          sx={{ mr: 1 }}
        >
          Uncompleted
        </Button>
      </Box>

      <List>
        {filteredTodos.length === 0 ? (
          <Typography>No todos available</Typography>
        ) : (
          filteredTodos.map((todo) => (
            <div key={todo.id}>
              <ListItem>
                <Checkbox
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                />
                <ListItemText
                  primary={todo.title}
                  secondary={todo.description}
                  sx={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                  }}
                />
                <IconButton edge="end" onClick={() => deleteTodo(todo.id)}>
                  <DeleteIcon sx={{ m: 1 }} />
                </IconButton>
              </ListItem>
              <Divider />
            </div>
          ))
        )}
      </List>
    </Container>
  );
};


export default Page;