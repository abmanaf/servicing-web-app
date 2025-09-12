import { ProvidersInfo } from "@/types";
import ContactInfoSection from "@/components/atoms/provider-details/contact/info-section";
import ServiceSection from "@/components/atoms/provider-details/service/section";
import ExperienceSection from "@/components/atoms/provider-details/experience/section";
import GetInTouch from "@/components/atoms/provider-details/get-in-touch";
import ReturnButton from "@/components/atoms/provider-details/return-button";
import Image from "next/image";

const ProfessionalPlumber = ({ blok }: { blok: ProvidersInfo }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <ReturnButton back={blok.return ?? ""} className="mb-4" />
        <div className="bg-primary text-white rounded-xl shadow-lg  overflow-hidden mb-8">
          <div className="text-center p-8">
            {blok.image && (
              <Image
                src={blok.image?.filename ?? ""}
                alt={blok.name ?? ""}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
            )}
            <h1 className="text-xl md:text-2xl font-bold mb-2">
              {blok.name ?? ""}
            </h1>
            <h2 className="text-lg mb-4">{blok.profession ?? ""}</h2>

            {blok.available_now && (
              <div className="inline-block bg-blue-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {blok.available_now}
              </div>
            )}

            {blok.not_available && (
              <div className="inline-block bg-red-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {blok.not_available}
              </div>
            )}

            <div className="flex items-center justify-center gap-2">
              <div className="flex text-yellow-300">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">
                    {i < 4 ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <span className="ml-2 text-blue-100">4.8/5</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {blok.contactInfo &&
              blok.contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                  <ContactInfoSection blok={item} />
                </div>
              ))}

            {blok.serviceInfo &&
              blok.serviceInfo.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                  <ServiceSection blok={service} />
                </div>
              ))}
          </div>

          <div className="space-y-8">
            {blok.experience &&
              blok.experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                  <ExperienceSection blok={exp} />
                </div>
              ))}

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="space-y-3">
                {blok.get_in_touch &&
                  blok.get_in_touch.map((button, index) => (
                    <GetInTouch key={index} blok={button} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalPlumber;
