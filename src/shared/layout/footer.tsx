"use client";

import {
  FooterSection,
  FooterItem,
  FooterAbout,
  Socails,
  InnierFooterItem,
} from "@/types";

export function Footer({ blok }: { blok: FooterSection }) {
  // Narrow types safely
  const aboutSection = blok?.footer_about?.find(
    (item): item is FooterAbout => item.component === "footerAbout"
  ) ?? { description: "", socials: [] };

  const quickLinks =
    (blok?.learn?.find(
      (item): item is FooterItem => item.component === "footerItem"
    )?.footer_item as InnierFooterItem[] | undefined) || [];

  const categories =
    (blok?.category?.find(
      (item): item is FooterItem => item.component === "footerItem"
    )?.footer_item as InnierFooterItem[] | undefined) || [];

  const legalSupport =
    (blok?.legal_support?.find(
      (item): item is FooterItem => item.component === "footerItem"
    )?.footer_item as InnierFooterItem[] | undefined) || [];

  const socialLinks = (aboutSection.socials as Socails[] | undefined) || [];

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-xl">handyPro</span>
            </div>
            <p className="text-muted-foreground mb-4">
              {aboutSection.description}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social._uid}
                  href={social.link?.url || "#"}
                  target={social.link?.target || "_blank"}
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="sr-only">Social media link</span>
                  {social.icon?.filename ? (
                    <img
                      src={social.icon.filename}
                      alt={social.icon.alt || "Social icon"}
                      className="h-5 w-5"
                    />
                  ) : (
                    <div className="h-5 w-5 rounded-full bg-muted-foreground"></div>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {quickLinks.length > 0 && (
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link._uid}>
                    <a
                      href={link.link?.cached_url || "#"}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Categories */}
          {categories.length > 0 && (
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((link) => (
                  <li key={link._uid}>
                    <a
                      href={link.link?.cached_url || "#"}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Legal & Support */}
          {legalSupport.length > 0 && (
            <div>
              <h3 className="font-semibold mb-4">Legal & Support</h3>
              <ul className="space-y-2">
                {legalSupport.map((link) => (
                  <li key={link._uid}>
                    <a
                      href={link.link?.cached_url || "#"}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} HandyPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
