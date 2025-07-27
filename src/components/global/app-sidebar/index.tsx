"use client"
import React from "react";
import { Project, User } from "@prisma/client";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarGroup, SidebarMenuButton } from "@/components/ui/sidebar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import NavMain from "./app-sidebar/nav-main";
import { data } from '@/lib/constants';



const AppSidebar = ({recentProjects, user, ...props}:{
    recentProjects: Project[],
}&{
    user: User
}& React.ComponentProps<typeof Sidebar>) => {

    return( 
        <Sidebar collapsible="icon" className="max-w-[212px] bg-background-90" {...props}> 
            <SidebarHeader className="pt-6 px-3 pb-0" >
                <SidebarMenuButton 
                size ={'lg'}
                className="data-[state=open]:text-sidebar-accent-foreground">

                    <div className="flex aspect-square sizw-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
{/* Here our sider var logo or user avatar can be placed logo was into the public folder*/}
                       <Avatar className="h-10 w-10 rounded-full">
                        <AvatarImage 
                        src={'/placeholder.jpg'} 
                        alt={`vivid-logo`} 
                        />
                        <AvatarFallback className ="rounded-lg">
                            VI
                        </AvatarFallback>
                       </Avatar>

                        </div>
                    <span className="truncate text-primary text text-3xl font-semibold">
                        {' '}
                        Vivid
                    </span>
                </SidebarMenuButton>
            </SidebarHeader>
            <SidebarContent className="px-3 mt-10 gap-y-6">
              <NavMain items={data.navMain} />
              <RecentOpen/>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>>
    )
}

export default AppSidebar;