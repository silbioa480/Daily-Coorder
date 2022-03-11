import axios, { AxiosResponse } from "axios";
import IProfileImage from "../interfaces/IProfileImage";

const PROFILE_IMAGE_API_BASE_URL =
  "https://daily-coorder-backend.herokuapp.com/api/profile_image";

class ProfileImageService {
  getProfileImages() {
    return axios.get<IProfileImage[]>(PROFILE_IMAGE_API_BASE_URL);
  }

  createProfileImage(profileImage: IProfileImage) {
    return axios.post(PROFILE_IMAGE_API_BASE_URL, profileImage);
  }

  getProfileImageById(
    profile_user_id: IProfileImage["profile_image_id"]
  ): Promise<AxiosResponse<IProfileImage>> {
    return axios.get(PROFILE_IMAGE_API_BASE_URL + "/" + profile_user_id);
  }

  updateProfileImage(
    profileImage: IProfileImage,
    profile_image_id: IProfileImage["profile_image_id"]
  ): Promise<AxiosResponse<IProfileImage>> {
    return axios.put(
      PROFILE_IMAGE_API_BASE_URL + "/" + profile_image_id,
      profileImage
    );
  }

  deleteProfileImage(profile_image_id: IProfileImage["profile_image_id"]) {
    return axios.delete(PROFILE_IMAGE_API_BASE_URL + "/" + profile_image_id);
  }
}

export default new ProfileImageService();
