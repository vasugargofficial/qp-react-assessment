import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '@/components/TodoList';

const mockTodos = [
  { id: '1', text: 'Todo 1', complete: false },
  { id: '2', text: 'Todo 2', complete: true },
];

test('renders todo list correctly', () => {
    const handleStatusChange = jest.fn();
    const { getByRole } = render(
      <TodoList todos={mockTodos} handleStatusChange={handleStatusChange} />
    );
  
    expect(getByRole('checkbox', { name: 'Todo 1' })).toBeInTheDocument();
    expect(getByRole('checkbox', { name: 'Todo 2' })).toBeInTheDocument();
  
    // Ensure checkboxes are checked according to todo status
    expect(getByRole('checkbox', { name: 'Todo 1' })).not.toBeChecked();
    expect(getByRole('checkbox', { name: 'Todo 2' })).toBeChecked();
  });

test('handles todo status change', () => {
  const handleStatusChange = jest.fn();
  const { getByText } = render(
    <TodoList todos={mockTodos} handleStatusChange={handleStatusChange} />
  );

  fireEvent.click(getByText('Todo 1'));

  expect(handleStatusChange).toHaveBeenCalledWith(mockTodos[0]);
});
