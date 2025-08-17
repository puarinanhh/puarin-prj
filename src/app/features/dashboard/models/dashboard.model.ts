export interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
}
