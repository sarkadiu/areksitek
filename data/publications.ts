export interface Publication {
  title: string;
  authors: string;
  venue: string;
  description?: string;
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
      title: "Mamba Goes HoME: Hierarchical Soft Mixture-of-Experts for 3D Medical Image Segmentation",
      authors: "Szymon Płotka, Gizem Mert, Maciej Chrabaszcz, Ewa Szczurek, and Arkadiusz Sitek",
      venue: "NeurIPS 2025",
      description: "We introduce Hierarchical Soft Mixture-of-Experts (HoME), a novel two-level token-routing architecture for efficient 3D medical image segmentation across diverse modalities (CT, MRI, US). Built on the Mamba Selective State Space Model backbone, HoME addresses key challenges in medical imaging: modeling local-to-global spatial hierarchies, handling modality diversity, and achieving scalability for high-resolution 3D inputs. The architecture combines local expert routing with global context refinement through a hierarchical design that partitions sequences into groups, routes tokens to specialized experts for localized feature extraction, and aggregates outputs via a global layer for cross-group information fusion. Mamba-HoME demonstrates superior generalization and outperforms state-of-the-art models across multiple datasets while maintaining memory and computational efficiency.",
      pdf: "https://arxiv.org/html/2507.06363v2",
      code: "https://github.com/gmum/MambaHoME",
      image: "/Mamba.png"
    },
    {
      title: "Foundation model of electronic medical records for adaptive risk estimation",
      authors: "Pawel Renc, Michal K. Grzeszczyk, Nassim Oufattole, Deirdre Goode, Yugang Jia, Szymon Bieganski, Matthew B. A. McDermott, Jaroslaw Was, Anthony E. Samir, Jonathan W. Cunningham, David W. Bates, and Arkadiusz Sitek",
      venue: "GigaScience, Volume 14, 2025",
      description: "We present ETHOS-ARES (Adaptive Risk Estimation System), a foundation model for electronic health records that learns comprehensive representations of patient health trajectories. Using a transformer-based architecture, ETHOS-ARES processes diverse medical data including vital signs, lab results, medications, and clinical events to perform zero-shot predictions of critical outcomes such as hospital mortality, ICU admission, and prolonged length of stay. The model leverages the MEDS (Medical Event Data Standard) format and demonstrates strong performance across multiple healthcare prediction tasks without task-specific fine-tuning, offering a flexible and powerful tool for clinical risk assessment and decision support.",
      pdf: "https://academic.oup.com/gigascience/article-pdf/doi/10.1093/gigascience/giaf107/64443371/giaf107.pdf",
      code: "https://github.com/ipolharvard/ethos-ares",
      website: "https://doi.org/10.1093/gigascience/giaf107",
      image: "/papers/renc_gigascience_2025.png"
    }
  ]
};

