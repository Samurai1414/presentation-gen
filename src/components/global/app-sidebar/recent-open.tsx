import React from "react";
import { SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar";
import { Project } from "@prisma/client";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { JsonValue } from "type-fest";
import { toast } from "sonner";


type Props = {
    recentProjects: Project[]
}

const RecentOpen = ({recentProjects}: Props) => {

    const router = useRouter();

    const handleClick = (projectId: string, slides: JsonValue) => {
        if(!projectId || !slides){
            toast.error('Project not found',{
        description:'Please try agin later or contact support.',
    })
    return
        }
        setSlides(JSON.parse(JSON.stringify(slides)))
        router.push(`/presentation/${projectId}`);
    }


    return  recentProjects.length > 0 ? (
        <SidebarGroup >
            <SidebarGroupLabel>
                Recently Opened
            </SidebarGroupLabel>
            <SidebarMenu>
               {recentProjects.length > 0 ? (
                 recentProjects.map((item) => (
                    <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                        asChild 
                        tooltip={item.title}
                        className={`hover:bg-primay-80`}>
                            <Button variant={'link'}

onClick={() => handleClick(item.id, item.slides)}

                            className={`text-xs itmes-center justify-start`}>

                                <span>{item.title}</span>
                            </Button>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                 )) 
                  )  : ''}
            </SidebarMenu>
        </SidebarGroup> ): (
             <></>
        )
        

}

export default RecentOpen;