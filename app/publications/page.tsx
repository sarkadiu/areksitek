import type { Metadata } from "next";
import Publications from "@/components/Publications";
import { personalInfo } from "@/data/personal";
export const metadata: Metadata = { title: "Publications | Arkadiusz Sitek" };
export default function PublicationsPage() {
  return (
    <div>
      <h1>Publications</h1>
      <p className="page-intro">Selected research in healthcare AI, patient health timelines, and medical imaging.</p>
      <p className="mb-12 text-gray-600">For my broader publication record, visit <a href={personalInfo.googleScholar}>Google Scholar</a> or <a href={`https://orcid.org/${personalInfo.orcid}`}>ORCID</a>.</p>
      <Publications />
    </div>
  );
}
