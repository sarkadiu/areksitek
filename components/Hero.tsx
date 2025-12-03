import Image from "next/image";
import { personalInfo } from "@/data/personal";

export default function Hero() {
  return (
    <section className="mb-12">
      <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
      
      <div className="grid md:grid-cols-3 gap-8 mt-6">
        <div className="md:col-span-2">
          <p className="text-lg mb-4">{personalInfo.title}</p>
          <p className="text-gray-700 mb-4">{personalInfo.affiliation}</p>
          
          <div className="prose max-w-none mb-6">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
          
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-6">
            <p className="mb-2">&ldquo;Science is the belief in the ignorance of experts.&rdquo;</p>
            <footer className="text-sm text-gray-500">— Richard Feynman</footer>
          </blockquote>
        </div>

        <div className="md:col-span-1">
          <div className="bg-gray-100 p-4 rounded-lg">
            {personalInfo.photo && (
              <div className="mb-4">
                <Image
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  width={300}
                  height={300}
                  className="rounded-lg w-full"
                />
              </div>
            )}
            
            <div className="text-sm space-y-2">
              {personalInfo.office && <p>{personalInfo.office}</p>}
              {personalInfo.address.line1 && <p>{personalInfo.address.line1}</p>}
              {personalInfo.address.line2 && <p>{personalInfo.address.line2}</p>}
              <p className="mt-4">
                <a href={`mailto:${personalInfo.email}`} className="text-primary hover:underline inline-flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

