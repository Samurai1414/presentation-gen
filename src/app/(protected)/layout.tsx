export const dynamic = "force-dynamic";
import { onAuthenticateUser } from "@/actions/user";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
    childeren: React.ReactNode;
}

const Layout =async (props: Props) => {
    const auth = await onAuthenticateUser();
    if(!auth.user) redirect("/sign-in");
    return <div className="w-full min-h-screen">{props.childeren} </div>
}

export default Layout;