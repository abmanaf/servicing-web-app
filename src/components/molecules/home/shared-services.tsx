// "use client";

// import { SectionHeader } from "@/components/atoms/shared/section-header";
// import { ContainerSection } from "@/shared/layout/container-section";
// import { cn } from "@/lib/utils";
// import {
//   getGridColumns,
//   getHeaderColor,
// } from "@/shared/layout/storyblok-global-style";
// import Link from "next/link";

// interface Service {
//   uuid: string;
//   slug: string;
//   content: {
//     name: string;
//     description?: string;
//     image?: {
//       filename: string;
//       alt: string;
//     };
//   };
// }

// interface SharedServicesProps {
//   blok: {
//     component: string;
//     _uid: string;
//     service_reference: Service[];
//   };
//   className?: string;
// }

// export function SharedServices({ blok, className }: SharedServicesProps) {
//   const services = blok.service_reference || [];

//   if (services.length === 0) {
//     return <div>No services available</div>;
//   }

//   const columns = getGridColumns("Three"); // Default to 3 columns
//   const headerColor = getHeaderColor("Default Highlight");

//   return (
//     <ContainerSection
//       className={cn(className, "mx-auto")}
//       background="muted"
//       padding="lg"
//       maxWidth="full"
//     >
//       <SectionHeader
//         title="Our Services"
//         description="Discover our range of professional services"
//         align="center"
//         className="mb-12"
//         titleClassName={headerColor}
//       />

//       <div className={cn(
//         "grid grid-cols-1 md:grid-cols-2 container mx-auto px-4",
//         columns,
//         "gap-8"
//       )}>
//         {services.map((service) => (
//           <div key={service.uuid} className="service-teaser bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
//             <h3 className="text-xl font-semibold text-gray-900 mb-3">
//               {service.content.name}
//             </h3>
//             {service.content.description && (
//               <p className="text-gray-600 mb-4">
//                 {service.content.description.substring(0, 100)}...
//               </p>
//             )}
//             {service.content.image && (
//               <img
//                 src={service.content.image.filename}
//                 alt={service.content.image.alt || service.content.name}
//                 className="w-full h-48 object-cover rounded-md mb-4"
//               />
//             )}
//             <Link
//               href={`/services/${service.slug}`}
//               className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
//             >
//               View Details
//             </Link>
//           </div>
//         ))}
//       </div>
//     </ContainerSection>
//   );
// }
