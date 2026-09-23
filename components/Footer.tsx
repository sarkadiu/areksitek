import { personalInfo } from "@/data/personal";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-content">
        <p>© {new Date().getFullYear()} {personalInfo.name}</p>
        <p>Content updated <time dateTime="2026-09-23">September 23, 2026</time></p>
        <a href={`mailto:${personalInfo.email}`}>Get in touch <span aria-hidden="true">↗</span></a>
      </div>
    </footer>
  );
}
