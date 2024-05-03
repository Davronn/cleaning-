import { create } from "zustand";
import { produce } from "immer";
import axios from "axios";

const AuthStore = (set: (produce: () => void) => void) => ({
  email: "",
  fullName: "",
  phoneNumber: "",
  password: "",
  login: async (user: { email: string; password: string }) => {
    try {
      const res = await axios.post(
        "https://app.olimjanov.uz/v1/auth/login",
        user
      );
      const data = await res.data;
      localStorage.setItem("access__tokennn", data.access_token);
      console.log(data);
      set(
        produce((state:any) => {
          state.email = data.email;
          state.password = data.password;
        })
      );
    } catch (error:any) {
      console.log(error.message);
    }
  },
});

export const useAuthStore = create(AuthStore);
