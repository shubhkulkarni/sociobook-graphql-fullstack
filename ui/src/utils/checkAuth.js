import { decodeJWT } from "./decodeJWT";

export const checkAuthStatus = () => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    return false;
  }
  const decodedToken = decodeJWT(token);
  if (!decodedToken) {
    return false;
  }

  if (Date.now() >= decodedToken.exp * 1000) {
    return false;
  }
  return { status: "authenticated", userId: decodedToken.id };
};
