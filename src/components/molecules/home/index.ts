import type { StoryblokAsset } from "@/types";

export interface ServiceReference {
  uuid: string;
  slug: string;
  name: string;
  content: {
    _uid: string;
    body: Array<{
      component: string;
      name?: string;
      profession?: string;
      email?: string;
      phone_number?: string;
      image?: StoryblokAsset;
      contactInfo?: Array<{
        contact?: Array<{
          label?: string;
          value?: string;
        }>;
      }>;
      get_in_touch?: Array<{
        label?: string;
        value?: string;
      }>;
    }>;
    component: string;
  };
  full_slug: string;
  url?: string;
  cached_url?: string;
  _uid: string;
  view_label?: string;
}
