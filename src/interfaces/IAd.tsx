interface IAd {
  ad_id: number;
  business_id: string;
  ad_image: number;
  ad_title: string;
  ad_url: string;
  ad_explain: string;
  ad_is_prove: boolean;
  ad_register_date: Date;
  ad_expire: number;
}

export default IAd;
