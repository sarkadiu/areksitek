export interface Publication {
  title: string;
  authors: string;
  venue: string;
  description?: string;
  type?: string;
  doi?: string;
  pubmed?: string;
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
  // Metadata verified against NEJM AI and PubMed on September 23, 2026.
  "2026": [
    {
      title: "Beyond language: generative artificial intelligence as a general computing model for medicine",
      authors: "Arkadiusz Sitek and David W. Bates",
      venue: "The Lancet Digital Health, 8(8), 101011, 2026",
      type: "Viewpoint",
      description: "A perspective on learning directly from tokenized medical data. Using ETHOS as an example, we discuss patient health timeline models as a foundation for simulating clinical trajectories and sharing models across institutions without sharing patient data.",
      doi: "10.1016/j.landig.2026.101011",
      website: "https://doi.org/10.1016/j.landig.2026.101011",
      pubmed: "https://pubmed.ncbi.nlm.nih.gov/42259738/"
    },
    {
      title: "MEDS — An Emerging Data Standard and Ecosystem for Health AI Research",
      authors: "Matthew B. A. McDermott, Ethan Steinberg, Jason A. Fries, Robin P. van de Water, Chao Pang, Patrick Rockenschaub, Pawel Renc, Jungwoo Oh, Kamilė Stankevičiūtė, Justin Xu, Tom J. Pollard, Nassim Oufattole, Michael Wornow, Teya S. Bergamaschi, Hyewon Jeong, Simon A. Lee, Vincent Jeanselme, Kiril V. Klein, Mikkel Odgaard, Maria E. Montgomery, Arkadiusz Sitek, Mads Nielsen, Jeffrey N. Chiang, Noa Dagan, Isaac Kohane, Shalmali Joshi, Edward Choi, and Nigam H. Shah",
      venue: "NEJM AI, 3(6), 2026",
      type: "Review Article",
      description: "The Medical Event Data Standard (MEDS) provides a shared, open-source foundation for health AI research. This review describes the standard, its growing ecosystem, and its role in reproducible workflows and foundation model development.",
      doi: "10.1056/AIra2501253",
      website: "https://doi.org/10.1056/AIra2501253"
    }
  ],
  "2025": [
    {
      title: "Mamba Goes HoME: Hierarchical Soft Mixture-of-Experts for 3D Medical Image Segmentation",
      authors: "Szymon Płotka, Gizem Mert, Maciej Chrabaszcz, Ewa Szczurek, and Arkadiusz Sitek",
      venue: "NeurIPS 2025",
      description: "A hierarchical mixture-of-experts architecture built on Mamba for 3D medical image segmentation. The model combines local and global context across CT, MRI, and ultrasound data.",
      website: "https://arxiv.org/abs/2507.06363",
      pdf: "https://proceedings.neurips.cc/paper_files/paper/2025/file/8cdae43c4af3da3f157382f9ebc65c56-Paper-Conference.pdf",
      code: "https://github.com/gmum/MambaHoME",
      image: "/Mamba.png"
    },
    {
      title: "Foundation model of electronic medical records for adaptive risk estimation",
      authors: "Pawel Renc, Michal K. Grzeszczyk, Nassim Oufattole, Deirdre Goode, Yugang Jia, Szymon Bieganski, Matthew B. A. McDermott, Jaroslaw Was, Anthony E. Samir, Jonathan W. Cunningham, David W. Bates, and Arkadiusz Sitek",
      venue: "GigaScience, Volume 14, 2025",
      description: "ETHOS-ARES uses patient health timelines to estimate changing clinical risks without task-specific fine-tuning. The framework supports adaptive risk assessment from electronic health records using the MEDS data format.",
      pdf: "https://academic.oup.com/gigascience/article-pdf/doi/10.1093/gigascience/giaf107/64443371/giaf107.pdf",
      code: "https://github.com/ipolharvard/ethos-ares",
      website: "https://doi.org/10.1093/gigascience/giaf107",
      image: "/papers/renc_gigascience_2025.png"
    }
  ]
};

