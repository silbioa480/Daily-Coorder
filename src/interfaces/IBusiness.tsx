interface IBusiness {
  business_id: string;
  business_profile: number;
  business_password: string;
  business_name: string;
  business_number: string;
  business_phone: string;
  business_email: string;
  business_follow_number: number;
  business_follower_number: number;
  business_is_ad: boolean;
  business_is_location: boolean;
  business_signup_date: Date;
  business_update_date?: Date;
}

export default IBusiness;
