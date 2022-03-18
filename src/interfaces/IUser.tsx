interface IUser {
  user_id: string;
  user_profile: number;
  user_password: string;
  user_name: string;
  user_nickname: string;
  user_phone: string;
  user_email: string;
  user_gender: boolean;
  user_birth: Date;
  user_weight?: number;
  user_height?: number;
  user_follow_number: number;
  user_follower_number: number;
  user_is_ad: boolean;
  user_is_location: boolean;
  user_is_admin: boolean;
  user_signup_date: Date;
  user_update_date?: Date;

  [key: string]: any;
}

export default IUser;
