import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Phone, Mail, Eye } from "lucide-react";
import Link from "next/link";
import { ServiceReference } from "@/components/molecules/home/index";

interface ServiceReferenceCardProps {
  service: ServiceReference;
}

export function ServiceReferenceCard({ service }: ServiceReferenceCardProps) {
  const providerInfo = service.content;

  if (!providerInfo) {
    return (
      <Card className="w-full overflow-hidden">
        <CardContent className="p-6">
          <p className="text-muted-foreground text-center">
            Service provider information not available
          </p>
        </CardContent>
      </Card>
    );
  }

  const emailContact = providerInfo.body?.[0]?.contactInfo?.[0]?.contact?.find(
    (c) => c.label === "Email Address" || c.label === "E-Mail-Adresse",
  );
  const phoneContact = providerInfo.body?.[0]?.contactInfo?.[0]?.contact?.find(
    (c) => c.label === "Phone Number" || c.label === "Telefonnummer",
  );

  const callButton = providerInfo.body?.[0]?.get_in_touch?.find(
    (g) => g.label === "Call Now" || g.label === "Jetzt anrufen",
  );
  const messageButton = providerInfo.body?.[0]?.get_in_touch?.find(
    (g) => g.label === "Send Message" || g.label === "Nachricht senden",
  );

  const initials = providerInfo.body?.[0]?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const serviceUrl =
    service.cached_url || service.full_slug || `/services/${service.slug}`;

  return (
    <Card className="w-full overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Avatar className="h-12 w-12 border">
            {providerInfo.body?.[0]?.image?.filename ? (
              <AvatarImage
                src={providerInfo.body?.[0]?.image.filename}
                alt={
                  providerInfo.body?.[0]?.image.alt ||
                  `${providerInfo.body?.[0]?.name}'s profile`
                }
                className="object-cover"
              />
            ) : null}
            <AvatarFallback className="text-xs font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start">
            <h3 className="text-base font-semibold">
              {providerInfo.body?.[0]?.name}
            </h3>
            <Badge variant="outline" className="mt-1 text-xs">
              {providerInfo.body?.[0]?.profession}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {(emailContact?.value || messageButton?.value) && (
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <a
              href={`mailto:${emailContact?.value || messageButton?.value}`}
              className="hover:underline"
            >
              {emailContact?.value || messageButton?.value}
            </a>
          </div>
        )}

        {(phoneContact?.value || callButton?.value) && (
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <a
              href={`tel:${phoneContact?.value || callButton?.value}`}
              className="hover:underline"
            >
              {phoneContact?.value || callButton?.value}
            </a>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-end gap-2 border-t pt-4">
        <Button size="sm" asChild>
          <Link href={serviceUrl} className="text-sm">
            <Eye className="mr-2 h-4 w-4" />{" "}
            {service.view_label ?? "View Details"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
