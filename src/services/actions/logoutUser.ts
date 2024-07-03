import { authKey } from "@/constants/auth-key";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { deleteCookie } from "./deleteCookie";

export const logoutUser = (router: AppRouterInstance) => {
  localStorage.removeItem(authKey);
  deleteCookie(authKey);
  router.refresh();
  router.push("/login");
};
