export interface User {
  id: number;
  fullname: string;
  email: string;
  dateOfBirth: string;
  genre: string;
  cpf: string;
}

export interface CreateUserInput {
  fullname: string;
  email: string;
  dateOfBirth: string;
  genre: string;
  cpf: string;
}

export type UpdateUserData = Partial<CreateUserInput>;

export interface UpdateUserInput extends UpdateUserData {
  id: number;
}