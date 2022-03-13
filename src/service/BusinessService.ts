import axios, { AxiosResponse } from "axios";
import IBusiness from "../interfaces/IBusiness";

const BUSINESS_API_BASE_URL =
  "https://daily-coorder-backend.herokuapp.com/api/business";

class BusinessService {
  getBusiness() {
    return axios.get<IBusiness[]>(BUSINESS_API_BASE_URL);
  }

  createBusiness(business: IBusiness) {
    return axios.post(BUSINESS_API_BASE_URL, business);
  }

  getBusinessById(
    business_id: IBusiness["business_id"]
  ): Promise<AxiosResponse<IBusiness>> {
    return axios.get<IBusiness>(BUSINESS_API_BASE_URL + "/" + business_id);
  }

  updateBusiness(
    business: IBusiness,
    business_id: IBusiness["business_id"]
  ): Promise<AxiosResponse<IBusiness>> {
    return axios.put(BUSINESS_API_BASE_URL + "/" + business_id, business);
  }

  deleteBusiness(business_id: IBusiness["business_id"]) {
    return axios.delete(BUSINESS_API_BASE_URL + "/" + business_id);
  }
}

export default new BusinessService();
