export interface NewsItem {
  date: string;
  content: string;
}

export const newsItems: NewsItem[] = [
  {
    date: "Dec 1, 2025",
    content: `🎉 Exciting news! Our paper on <a href="#">Topic X</a> has been accepted to NeurIPS 2025! 
    Led by <a href="#">Student Name</a>. We also have several workshop papers being presented.`
  },
  {
    date: "Oct 2, 2025",
    content: `🚀 Honored and excited to receive a <a href="#">grant from Organization</a> for research 
    into <em>Your Research Topic</em>.`
  },
  {
    date: "Jul 15, 2025",
    content: `⭐ Awarded the NSF CAREER award for <a href="#">Your Research Project Title</a>.`
  },
  {
    date: "May 10, 2025",
    content: `📝 New preprint available on <a href="#">arXiv</a>: "Your Paper Title".`
  },
  {
    date: "Jan 7, 2025",
    content: `⭐ Awarded a grant from <a href="#">Funding Organization</a> to study 
    "Your Research Question" together with <a href="#">Collaborator Name</a>.`
  },
];

