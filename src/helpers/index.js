import { toast } from "react-toastify"

const showToast = (type, message) => {
    toast[type](message, {
        position: "top-right",
        className: "font-light text-sm",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
    })
}

export { showToast }