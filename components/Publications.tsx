import { publications } from "@/data/publications";
import Image from "next/image";

export default function Publications() {
  const years = Object.keys(publications).sort((a, b) => Number(b) - Number(a));

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-4">selected publications</h2>
      <p className="text-gray-600 mb-8 italic">
        The aim is to highlight a small subset of work, and to give a sense for the sorts of 
        problems being worked on. Please see Google Scholar for a complete and up-to-date list 
        of publications.
      </p>

      {years.map((year) => (
        <div key={year} className="mb-12">
          <h3 className="text-2xl font-bold mb-6">{year}</h3>
          
          <ol className="space-y-8">
            {publications[year].map((pub, index) => (
              <li key={index} className="flex gap-4">
                {pub.image && (
                  <div className="flex-shrink-0">
                    <Image
                      src={pub.image}
                      alt={pub.title}
                      width={120}
                      height={90}
                      className="rounded"
                    />
                  </div>
                )}
                
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">{pub.title}</h4>
                  <p className="text-gray-700 mb-2">{pub.authors}</p>
                  <p className="text-gray-600 italic mb-3">{pub.venue}</p>
                  
                  <div className="flex gap-3 text-sm">
                    {pub.pdf && (
                      <a href={pub.pdf} className="text-primary hover:underline">
                        PDF
                      </a>
                    )}
                    {pub.code && (
                      <a href={pub.code} className="text-primary hover:underline">
                        Code
                      </a>
                    )}
                    {pub.website && (
                      <a href={pub.website} className="text-primary hover:underline">
                        Website
                      </a>
                    )}
                    {pub.video && (
                      <a href={pub.video} className="text-primary hover:underline">
                        Video
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </section>
  );
}

