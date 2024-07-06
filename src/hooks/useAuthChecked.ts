"use client";
import { userLoggedIn } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hook";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function useAuthCheck() {
  const dispatch = useAppDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    console.log(token);
    if (token) {
      dispatch(
        userLoggedIn({
          accessToken: token,
        }),
      );
    }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);

  return authChecked;
}
