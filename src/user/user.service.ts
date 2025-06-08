import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UserService {
  private users: User[] = [];
  private idCounter = 1;

  create(input: CreateUserInput): User {
    const newUser = { id: this.idCounter++, ...input };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  delete(id: number): boolean {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) return false;
    this.users.splice(index, 1);
    return true;
  }
}
