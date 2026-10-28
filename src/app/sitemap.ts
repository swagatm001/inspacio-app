import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/site";
import { projectsConstants } from "@/constants/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = ["", "/projects", "/services", "/about", "/contact"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const projects: MetadataRoute.Sitemap = projectsConstants.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...projects];
}
