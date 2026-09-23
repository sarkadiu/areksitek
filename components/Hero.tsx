import Image from "next/image";
import Link from "next/link";
import { personalInfo } from "@/data/personal";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="profile-heading">
      <div>
        <p className="eyebrow">Healthcare AI · Medical imaging · Physics</p>
        <h1 id="profile-heading">{personalInfo.name}</h1>
        <p className="hero-role">{personalInfo.title}</p>
        <p className="affiliation">{personalInfo.affiliation}</p>
        <div className="biography">{personalInfo.bio.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="profile-links" aria-label="Professional profiles">
          <a href={`mailto:${personalInfo.email}`}>Email</a>
          <a href={personalInfo.googleScholar}>Google Scholar</a>
          <a href={`https://orcid.org/${personalInfo.orcid}`}>ORCID</a>
          <a href={personalInfo.github}>GitHub</a>
          <a href={personalInfo.linkedin}>LinkedIn</a>
        </div>
        <blockquote className="research-quote">
          <p>&ldquo;Science is the belief in the ignorance of experts.&rdquo;</p>
          <footer>— Richard Feynman</footer>
        </blockquote>
        <Link href="/projects" className="text-link">Explore my research <span aria-hidden="true">↗</span></Link>
      </div>
      <aside className="profile-aside" aria-label="Contact information">
        <Image src={personalInfo.photo} alt={personalInfo.name} width={300} height={300} priority className="portrait" />
        <address><span>{personalInfo.office}</span><span>{personalInfo.address.line1}</span><span>{personalInfo.address.line2}</span></address>
      </aside>
    </section>
  );
}
