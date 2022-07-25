import { CheckCircleIcon, XCircleIcon, BanIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify"

export enum AlertType {
    'success' = 'success',
    'warning' = 'warning',
    'error' = 'error'
}

const icons: any = {
    "success": <CheckCircleIcon className="h-8 w-auto text-green-400"/>,
    "warning": <BanIcon className="h-8 w-auto text-yellow-600"/>,
    "error": <XCircleIcon className="h-8 w-auto text-red-400" />
}

export const showAlert = (type: AlertType, message: string) => {
    toast.success(message, {
        icon: icons[type],
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'text-sm'
    });
}
