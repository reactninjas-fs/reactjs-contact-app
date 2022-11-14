import { toast } from "react-toastify";


const toastWarningNotify = (msg) => {
  toast(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export default toastWarningNotify;
