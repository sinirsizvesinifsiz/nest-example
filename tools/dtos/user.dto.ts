export class UserCreatedDto {
    name: string;
    surname: string;
    password: string;
    email: string;
    birthday: Date;

}

export class UserLoginDto {
    email: string;
    password: string;
}
