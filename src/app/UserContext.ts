export class UserContext{
  username: string;
  password: string;
  email!: string;
  isLoggedIn: boolean;

  constructor(username: string, password: string, email: string, isLoggedIn: boolean) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.isLoggedIn = isLoggedIn;
  }
}