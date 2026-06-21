import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom"
import { apiSendContact } from "../services/apiGetContactForm";
export function useContact() {
    const navigate = useNavigate()
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
        mutationKey: ["contact"],
        mutationFn: apiSendContact,
        onSuccess: () => {
            toast.success("Your message has been received, we'll respond to you shortly!")
            queryClient.invalidateQueries({ queryKey: ["contactUs"] });
            setTimeout(()=> navigate("/thankYou"), 5000)
        },

        onError: (error) => {
            toast.error(error?.message || "Your request failed!")
        },
    });


    return { mutate, isPending };
};
