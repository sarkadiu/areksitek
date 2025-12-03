import { personalInfo } from "@/data/personal";

export default function PublicationsPage() {
  return (
    <div>
      <h1>Publications</h1>
      
      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          For a complete and up-to-date list of my publications, please visit:
        </p>
        <div className="flex flex-wrap gap-4">
          {personalInfo.orcid && (
            <a 
              href={`https://orcid.org/${personalInfo.orcid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 256 256" fill="currentColor">
                <path d="M256,128c0,70.7-57.3,128-128,128C57.3,256,0,198.7,0,128C0,57.3,57.3,0,128,0C198.7,0,256,57.3,256,128z" fill="#A6CE39"/>
                <path d="M86.3,186.2H70.9V79.1h15.4v48.4V186.2z M108.9,79.1h41.6c39.6,0,57,28.3,57,53.6c0,27.5-21.5,53.6-56.8,53.6h-41.8V79.1z M124.3,172.4h24.5c34.9,0,42.9-26.5,42.9-39.7c0-21.5-13.7-39.7-43.7-39.7h-23.7V172.4z M88.7,56.8c0,5.5-4.5,10.1-10.1,10.1c-5.6,0-10.1-4.6-10.1-10.1c0-5.6,4.5-10.1,10.1-10.1C84.2,46.7,88.7,51.3,88.7,56.8z" fill="#FFF"/>
              </svg>
              View on ORCID
            </a>
          )}
          {personalInfo.googleScholar && (
            <a 
              href={personalInfo.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
              </svg>
              View on Google Scholar
            </a>
          )}
        </div>
      </div>

      <div className="mt-12">
        <p className="text-gray-600 italic">
          My publication list is automatically maintained and updated on ORCID and Google Scholar. 
          Please use the links above to view the most current and complete list of publications.
        </p>
      </div>
    </div>
  );
}
