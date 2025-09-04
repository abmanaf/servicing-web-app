"use client";

import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu";
import { Button } from "../../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";
import { Menu, X } from "lucide-react";
import { NavBar as NavBarType, SiteLogo } from "@/types";
import Link from "next/link";
import Image from "next/image";

export function Navbar({ blok }: { blok: NavBarType }) {
  const [isOpen, setIsOpen] = useState(false);

  const logoData = blok?.logo_title?.find(
    (item): item is SiteLogo => item.component === "siteLogo"
  );
  const siteNameParts = logoData?.site_name
    ? Array.isArray(logoData.site_name)
    // @ts-ignore
      ? logoData.site_name.map((part) => part.text).join("")
      : logoData.site_name
    : "handyPro";

  const navItems = blok?.header_nav || [];
  const authItems = blok?.auth_item || [];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <div className="flex items-center gap-2">
          {logoData?.logo?.filename ? (
            <Image
              src={logoData.logo.filename}
              alt={logoData.logo.alt || siteNameParts}
              className="h-8 w-auto"
              width={32}
              height={32}
            />
          ) : (
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                {typeof siteNameParts === "string"
                  ? siteNameParts.charAt(0)
                  : "H"}
              </span>
            </div>
          )}
          <span className="font-bold text-xl">{siteNameParts}</span>
        </div>

        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item._uid}>
                  <NavigationMenuLink
                    href={item.link?.cached_url || "#"}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-2">
          {authItems.map((item) => (
            <Button
              key={item._uid}
              variant={item.label === "Login" ? "outline" : "default"}
              size="sm"
              style={{
                color: item.text_color || undefined,
                backgroundColor: item.background_color || undefined,
              }}
              asChild
            >
              <Link href={item.link?.cached_url || "#"}>{item.label}</Link>
            </Button>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-2">
              <div className="flex flex-col gap-6 mt-10">
                {navItems.map((item) => (
                  <Link
                    key={item._uid}
                    href={item.link?.cached_url || "#"}
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="flex flex-col gap-3 pt-6 border-t">
                  {authItems.map((item) => (
                    <Button
                      key={item._uid}
                      variant={item.label === "Login" ? "outline" : "default"}
                      style={{
                        color: item.text_color || undefined,
                        backgroundColor: item.background_color || undefined,
                      }}
                      asChild
                    >
                      <Link
                        href={item.link?.cached_url || "#"}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
