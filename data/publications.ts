export interface Publication {
  title: string;
  authors: string;
  venue: string;
  pdf?: string;
  code?: string;
  website?: string;
  video?: string;
  image?: string;
}

export interface PublicationsByYear {
  [year: string]: Publication[];
}

export const publications: PublicationsByYear = {
  "2025": [
    {
      title: "Your Recent Paper Title",
      authors: "First Author, Second Author, and Your Name",
      venue: "In Advances in Neural Information Processing Systems, 2025",
      pdf: "#",
      code: "#",
      website: "#",
      image: "/papers/paper1.png"
    },
    {
      title: "Another Important Paper",
      authors: "Student Name, Your Name, and Collaborator Name",
      venue: "In International Conference on Learning Representations, 2025",
      pdf: "#",
      code: "#",
      website: "#",
      image: "/papers/paper2.png"
    },
    {
      title: "Solving Problem X with Method Y",
      authors: "Your Name, Collaborator A, and Collaborator B",
      venue: "arXiv preprint arXiv:2501.12345, 2025",
      pdf: "#",
      code: "#",
      image: "/papers/paper3.png"
    }
  ],
  "2024": [
    {
      title: "Foundation Work in Your Area",
      authors: "Your Name, Advisor Name, and Co-authors",
      venue: "In Neural Information Processing Systems, 2024",
      pdf: "#",
      code: "#",
      website: "#",
      video: "#",
      image: "/papers/paper4.png"
    },
    {
      title: "Learning to Do Something Novel",
      authors: "First Author, Your Name, and Others",
      venue: "In Forty-first International Conference on Machine Learning, 2024",
      pdf: "#",
      code: "#",
      image: "/papers/paper5.png"
    },
    {
      title: "Theoretical Contributions to Field",
      authors: "Your Name and Collaborators",
      venue: "In International Conference on Learning Representations, 2024",
      pdf: "#",
      code: "#",
      website: "#",
      image: "/papers/paper6.png"
    }
  ],
  "2023": [
    {
      title: "Earlier Work on Important Problem",
      authors: "Your Name, Advisor, and Team",
      venue: "In Conference on Robot Learning, 2023",
      pdf: "#",
      code: "#",
      video: "#",
      image: "/papers/paper7.png"
    },
    {
      title: "Novel Approach to Classic Problem",
      authors: "Lead Author, Your Name, and Others",
      venue: "In International Conference on Learning Representations, 2023",
      pdf: "#",
      code: "#",
      website: "#",
      image: "/papers/paper8.png"
    },
    {
      title: "Your PhD Thesis Title",
      authors: "Your Name",
      venue: "PhD Thesis, Your University, 2023",
      pdf: "#",
      image: "/papers/thesis.png"
    }
  ],
  "2022": [
    {
      title: "Seminal Work During PhD",
      authors: "Your Name and Advisors",
      venue: "In Advances in Neural Information Processing Systems, 2022",
      pdf: "#",
      code: "#",
      video: "#",
      website: "#",
      image: "/papers/paper9.png"
    }
  ]
};

