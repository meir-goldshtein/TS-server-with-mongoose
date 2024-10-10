import { Request } from 'express';

interface NewUserDto {
    user_name: string;
    password: string;
    email: string;
    role: string;
    area: string;
    units: number[] | number;
    todos?: TodoDto[] | TodoDto;
}

interface TodoDto {
    id: number
    title: string
    description: string
    done: boolean
}

interface postDto {
    title: string
    content: string
}

interface commentDto {
    content: string
}

interface RequestWithToken extends Request {
    user?: {
      userId: string;
      role: string;
    };
  }
export {NewUserDto, TodoDto, RequestWithToken, postDto, commentDto}