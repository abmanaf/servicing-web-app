import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import type { ProviderDetails as ProviderDetailsType } from "@/types";

type ProviderCardProps = {
  blok: ProviderDetailsType;
};

export function ProviderCard({ blok }: ProviderCardProps) {
  const initials = blok?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="w-full overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Avatar className="h-12 w-12 border">
            {blok?.image?.filename ? (
              <AvatarImage
                src={blok.image.filename}
                alt={blok.image.alt ?? `${blok.name}'s profile`}
                className="object-cover"
              />
            ) : null}
            <AvatarFallback className="text-xs font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start">
            <h3 className="text-base font-semibold">{blok?.name}</h3>
            <Badge variant="outline" className="mt-1 text-xs">
              {blok?.service}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Mail className="h-4 w-4" />
          <a href={`mailto:${blok?.email}`} className="hover:underline">
            {blok?.email}
          </a>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Phone className="h-4 w-4" />
          <a href={`tel:${blok?.phone_number}`} className="hover:underline">
            {blok?.phone_number}
          </a>
        </div>
      </CardContent>
      {blok?.get_in_touch?.length && (
        <CardFooter className="flex justify-end gap-2 border-t pt-4">
          {blok.get_in_touch.map((action) => (
            <Button key={action._uid} variant="outline" size="sm" asChild>
              <Link
                href={action?.link?.url || action?.link?.cached_url || "#"}
                className="text-sm"
              >
                {action?.label}
              </Link>
            </Button>
          ))}
        </CardFooter>
      )}
    </Card>
  );
}
