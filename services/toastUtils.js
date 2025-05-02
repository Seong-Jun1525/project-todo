import { toast } from "react-toastify";

export const topCenterAlert = (msg) => {
  toast(msg, { position: "top-center" });
};

export const successAlter = (msg) => {
  toast.success(msg);
};

export const errorAlert = (msg) => {
  toast.error(msg);
};
