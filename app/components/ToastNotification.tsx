import { toast } from "react-toastify";

export const showToast = (message: any, type:any) => {
  const toastConfig = {
    autoClose: 3000, // Adjust this value to control how long the toast is displayed
    hideProgressBar: false,
    className: "custom-toast",
  };

  switch (type) {
    case "success":
      toast.success(message, toastConfig);
      break;
    case "warning":
      toast.warning(message, toastConfig);
      break;
    case "error":
      toast.error(message, toastConfig);
      break;
    default:
      toast(message, toastConfig);
  }
};
