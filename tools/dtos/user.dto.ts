import { GroupModel } from 'tools/models/group.model';
import { RoleModel } from 'tools/models/role.model';

export class UserCreatedDto {
  name: string;
  surname: string;
  image: string;
  password: string;
  email: string;
  birthDay: Date;
}

export class UserUpdateDto {
  name: string;
  surname: string;
  image: string;
  password: string;
  birthDay: Date;
  roles: RoleModel[];
  groups: GroupModel[];
}
export class UserLoginDto {
  email: string;
  password: string;
}
