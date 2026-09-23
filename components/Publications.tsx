import { publications } from "@/data/publications";
import { personalInfo } from "@/data/personal";
import Image from "next/image";

export default function Publications() {
  const years = Object.keys(publications).sort((a, b) => Number(b) - Number(a));
  return (
    <section className="publications" aria-labelledby="selected-publications">
      <div className="section-heading">
        <div><p className="eyebrow">Selected work</p><h2 id="selected-publications">Recent publications</h2></div>
        <a href={personalInfo.googleScholar} className="text-link">All publications on Google Scholar <span aria-hidden="true">↗</span></a>
      </div>
      {years.map(year => (
        <div key={year} className="publication-year">
          <h3>{year}</h3>
          <ol className="publication-list">
            {publications[year].map(pub => (
              <li key={pub.title}>
                <article className="publication">
                  <div className="publication-body">
                    <p className="publication-venue">{pub.venue}{pub.type && <span> · {pub.type}</span>}</p>
                    <h4><a href={pub.website || pub.pdf}>{pub.title}</a></h4>
                    <p className="publication-authors">{pub.authors.split(/(Arkadiusz Sitek)/g).map((part, index) => part === "Arkadiusz Sitek" ? <strong key={index}>{part}</strong> : part)}</p>
                    {pub.description && <p className="publication-description">{pub.description}</p>}
                    <div className="publication-links">
                      {pub.website && <a href={pub.website}>Read article <span aria-hidden="true">↗</span></a>}
                      {pub.pdf && <a href={pub.pdf}>PDF</a>}
                      {pub.code && <a href={pub.code}>Code</a>}
                      {pub.pubmed && <a href={pub.pubmed}>PubMed</a>}
                      {pub.video && <a href={pub.video}>Video</a>}
                    </div>
                    {pub.doi && <p className="publication-doi">DOI: <a href={`https://doi.org/${pub.doi}`}>{pub.doi}</a></p>}
                  </div>
                  {pub.image && <Image src={pub.image} alt={`Figure from ${pub.title}`} width={160} height={120} className="publication-image" />}
                </article>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </section>
  );
}
