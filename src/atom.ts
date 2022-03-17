import { atom } from "recoil";
import IMemberId from "./interfaces/IMemberId";

export const isLoginAtom = atom({
  key: "isLogin",
  default: false,
});

export const memberAtom = atom<IMemberId>({
  key: "memberId",
  default: {
    member_id: "",
    member_password: "",
    is_business: false,
  },
});
