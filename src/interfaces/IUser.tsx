interface IUser {
  user_id: string;
  user_password: string;
  user_name: string;
  user_gender: boolean;
  user_birth: Date;
  user_nickname: string;
  user_phone: string;
  user_email: string;
  user_weights: number;
  user_height: number;
  isAdmin: boolean;
}

export default IUser;
