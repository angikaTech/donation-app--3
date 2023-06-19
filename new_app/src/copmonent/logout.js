import { base_url } from "@/utils/base_url";
import axios from "axios";
import { useRouter } from "next/router";

import { useEffect } from "react";



const Logout = () => {
    const router = useRouter
    useEffect(() => {
        axios.get(`${base_url}user/logout`).then((Response) => {
            console.log(Response);
            router.push("/")

        });
    }, []);
    return;
}

export default Logout;