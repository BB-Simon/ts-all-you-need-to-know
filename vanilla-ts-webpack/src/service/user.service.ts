export interface User {
  id: number;
  name: string;
  email: string;
}

export function getUsers(): User[] {
  return [
    {
      id: 1,
      name: "simon chowdery",
      email: "simon@example.com",
    },
    {
      id: 2,
      name: "john doe",
      email: "john@example.com",
    },
  ];
}
