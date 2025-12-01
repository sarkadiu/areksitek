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

          {personalInfo.announcement && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="font-semibold">Join us!</p>
              <p className="text-sm mt-2">{personalInfo.announcement}</p>
            </div>
          )}
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
              <p>{personalInfo.office}</p>
              <p>{personalInfo.address.line1}</p>
              <p>{personalInfo.address.line2}</p>
              <p className="mt-4">
                <a href={`mailto:${personalInfo.email}`} className="text-primary">
                  {personalInfo.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

