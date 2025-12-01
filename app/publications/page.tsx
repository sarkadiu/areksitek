import { publications } from "@/data/publications";

export default function PublicationsPage() {
  const years = Object.keys(publications).sort((a, b) => Number(b) - Number(a));

  return (
    <div>
      <h1>Publications</h1>
      
      <p className="text-gray-700 mb-8">
        For a complete and up-to-date list of publications, please see my{" "}
        <a href="#" className="text-primary">Google Scholar profile</a>.
      </p>

      {years.map((year) => (
        <div key={year} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{year}</h2>
          
          <ol className="space-y-6">
            {publications[year].map((pub, index) => (
              <li key={index} className="pb-6 border-b border-gray-200 last:border-0">
                <h3 className="font-semibold text-lg mb-2">{pub.title}</h3>
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
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

