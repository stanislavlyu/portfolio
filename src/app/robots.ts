import { getBaseURL } from "@utils/env"

const baseUrl = getBaseURL()

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
