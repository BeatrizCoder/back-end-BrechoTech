import { User } from '../users.entity';
import { UserService } from '../users.service';
export class ReturnUserDto {
  user: User;
  message: string;
  UserService: UserService;
}
