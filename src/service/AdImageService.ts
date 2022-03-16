import axios, { AxiosResponse } from "axios";
import IAdImage from "../interfaces/IAdImage";

const AD_IMAGE_API_BASE_URL =
  "https://daily-coorder-backend.herokuapp.com/api/ad_image";

class AdImageService {
  getAdImages() {
    return axios.get<IAdImage[]>(AD_IMAGE_API_BASE_URL);
  }

  createAdImage(ad_image: File) {
    return axios.post(AD_IMAGE_API_BASE_URL, ad_image);
  }

  getAdImageById(
    ad_image_id: IAdImage["ad_image_id"]
  ): Promise<AxiosResponse<IAdImage>> {
    return axios.get(AD_IMAGE_API_BASE_URL + "/" + ad_image_id);
  }

  updateAdImage(
    ad_image: IAdImage,
    ad_image_id: IAdImage["ad_image_id"]
  ): Promise<AxiosResponse<IAdImage>> {
    return axios.put(AD_IMAGE_API_BASE_URL + "/" + ad_image_id, ad_image);
  }

  deleteAdImage(ad_image_id: IAdImage["ad_image_id"]) {
    return axios.delete(AD_IMAGE_API_BASE_URL + "/" + ad_image_id);
  }
}

export default new AdImageService();
