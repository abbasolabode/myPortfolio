import supabase from "../services/supabase";

export async function apiSendContact(formData) {
    if(!formData) return
    const { data, error } = await supabase
        .from("contact")
        .insert([formData])
        .select();

    if (error) {
        throw new Error(error?.message);
    }
    return data;
}

