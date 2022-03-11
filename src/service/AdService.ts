import axios, { AxiosResponse } from "axios";
import IAd from "../interfaces/IAd";

const AD_API_BASE_URL = "https://daily-coorder-backend.herokuapp.com/api/ad";

class AdService {
  getAds() {
    return axios.get<IAd[]>(AD_API_BASE_URL);
  }

  createAd(ad: IAd) {
    return axios.post(AD_API_BASE_URL, ad);
  }

  getAdById(ad_id: IAd["ad_id"]): Promise<AxiosResponse<IAd>> {
    return axios.get(AD_API_BASE_URL + "/" + ad_id);
  }

  updateAd(ad: IAd, ad_id: IAd["ad_id"]): Promise<AxiosResponse<IAd>> {
    return axios.put(AD_API_BASE_URL + "/" + ad_id, ad);
  }

  deleteAd(ad_id: IAd["ad_id"]) {
    return axios.delete(AD_API_BASE_URL + "/" + ad_id);
  }
}

export default new AdService();
