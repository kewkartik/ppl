"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { Avatar } from "@/components/ui/avatar"
import { Star } from 'lucide-react'
import Link from "next/link"

export function Navigation() {
  return (
    <NavigationMenu>
      <Avatar className="mx-auto max-w-7xl flex flex-1 justify-items-start">
        <Link className="pl-6 xl:pl-0 pt-1 text-xl font-sans font-bold" href="/"> PPLignments </Link>
      </Avatar>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Practice</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="gap-3 space-y-2 p-6 md:w-[300px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="https://github.com/kewkartik/ppl"
                    >
                      <Star className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                      PPL Assignments
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">  
                      Found it useful! Star the PPLignments repo.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/practice/calc" title="Calc">
                  Calc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Notes</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-6 md:w-[300px] space-y-2">
                <ListItem href="/notes/week1" title="Week 1">
                  Types of Lists
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
  )
}
 
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href="/" 
          {...props}
        >
          <div className="z-20 text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
export default Navigation;

ListItem.displayName = "ListItem"