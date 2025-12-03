export default function Projects() {
  return (
    <div>
      <h1>Research Interests</h1>

      <p className="text-gray-700 mb-8 text-lg">
        Throughout my career, I have had the privilege of working alongside clinicians in many 
        hospitals to support patient care, participating in numerous clinical trials, working in 
        industry at Philips and IBM, and contributing to non-profit research initiatives. 
        This diverse experience shapes my translational approach to research.
      </p>

      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-bold mb-3">Theranostics</h2>
          <p className="text-gray-700 mb-4">
            From new ideas in data acquisition to patient satisfaction, theranostics carries many 
            opportunities to improve patient care using AI. We work on multiple fronts related to 
            improved imaging of therapy, exploring how artificial intelligence can enhance both 
            diagnostic accuracy and therapeutic outcomes in nuclear medicine.
          </p>
          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-600 mb-2">Related Publications:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Toward+Integrated+Clinical-Computational+Nuclear+Medicine+Sitek" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-primary hover:underline">
                  Toward Integrated Clinical-Computational Nuclear Medicine (PET Clinics)
                </a>
              </li>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Artificial+intelligence+in+PET+industry+perspective" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-primary hover:underline">
                  Artificial Intelligence in PET: An Industry Perspective (PET Clinics)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-bold mb-3">Generative Models & Foundation Models in Clinical Decision Support</h2>
          <p className="text-gray-700 mb-4">
            Developing agentic AI for personalized decision support in the context of 4P medicine 
            (Predictive, Preventive, Personalized, and Participatory). We explore how large-scale 
            foundation models can be adapted to individual patient needs, creating intelligent agents 
            that assist in clinical decision-making while respecting the unique characteristics of 
            each patient.
          </p>
          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-600 mb-2">Related Publications:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>
                <a href="https://doi.org/10.1093/gigascience/giaf107" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-primary hover:underline">
                  Foundation model of electronic medical records for adaptive risk estimation (GigaScience, 2025)
                </a>
              </li>
              <li>
                <a href="https://www.nature.com/articles/s41746-024-01235-0" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-primary hover:underline">
                  Zero shot health trajectory prediction using transformer (npj Digital Medicine, 2024)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-bold mb-3">Towards Total AI in Radiology</h2>
          <p className="text-gray-700 mb-4">
            Working towards comprehensive AI integration across the entire radiology workflow, from 
            image acquisition and reconstruction to interpretation and reporting. This initiative 
            aims to create seamless AI-assisted systems that enhance radiologist efficiency while 
            maintaining and improving diagnostic accuracy.
          </p>
          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-600 mb-2">Related Publications:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>
                <a href="https://arxiv.org/html/2507.06363v2" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-primary hover:underline">
                  Mamba Goes HoME: Hierarchical Soft Mixture-of-Experts for 3D Medical Image Segmentation (NeurIPS 2025)
                </a>
              </li>
              <li>
                TabMixer: Noninvasive Estimation of the Mean Pulmonary Artery Pressure via Imaging and Tabular Data Mixing (MICCAI)
                {" "}
                <a href="https://github.com/SanoScience/TabMixer" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-primary hover:underline">
                  [Code]
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-bold mb-3">Improving Outcomes in Obstetrics</h2>
          <p className="text-gray-700 mb-4">
            Applying AI and advanced imaging techniques to improve maternal and fetal health outcomes. 
            Our work focuses on developing predictive models and decision support tools that can help 
            clinicians make better-informed decisions in prenatal care and delivery.
          </p>
          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-600 mb-2">Related Publications:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/37821009/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-primary hover:underline">
                  Deep learning for estimation of fetal weight throughout the pregnancy from fetal abdominal ultrasound (Am J Obstet Gynecol MFM, 2023)
                </a>
              </li>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/35051921/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-primary hover:underline">
                  Deep learning fetal ultrasound video model match human observers in biometric measurements
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-bold mb-3">Bayesian Statistics</h2>
          <p className="text-gray-700 mb-4">
            Promoting Bayesian approaches to avoid many cognitive biases in data handling and clinical 
            decision-making. This framework provides rigorous methods for making decisions under 
            uncertainty, incorporating prior knowledge with new evidence to support more rational and 
            transparent clinical reasoning.
          </p>
          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-600 mb-2">Related Publications:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>
                <a href="https://www.crcpress.com/Statistical-Computing-in-Nuclear-Imaging/Sitek/p/book/9781466567764" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-primary hover:underline">
                  Statistical Computing in Nuclear Imaging (CRC Press, 2014)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pb-6">
          <h2 className="text-2xl font-bold mb-3">Other Professional Interests</h2>
          <p className="text-gray-700 mb-4">
            I have worked on and contributed to various other domains:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><span className="font-semibold">Imaging Systems Design</span> — Design and optimization of nuclear medicine imaging systems</li>
            <li><span className="font-semibold">Tomographic Image Reconstruction</span> — Advanced algorithms for reconstructing images from projection data</li>
            <li><span className="font-semibold">Quantitative Finance</span> — Mathematical modeling and machine learning for financial markets and trading strategies</li>
            <li><span className="font-semibold">Drug Discovery</span> — Computational methods for accelerating drug discovery and therapeutic target identification</li>
            <li><span className="font-semibold">AI Assistance in Surgery</span> — Real-time AI tools to assist surgeons during procedures</li>
            <li><span className="font-semibold">Data Visualization</span> — Innovative visual representations of complex data and computational art</li>
            <li><span className="font-semibold">Virtual Reality</span> — VR applications in medicine, training, and immersive data exploration</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          For a complete list of publications, please visit my{" "}
          <a href="https://scholar.google.com/citations?user=3QheHgMAAAAJ&hl=en&oi=ao" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-primary hover:underline font-semibold">
            Google Scholar profile
          </a>
          {" "}or{" "}
          <a href="https://orcid.org/0000-0002-0677-4002" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-primary hover:underline font-semibold">
            ORCID
          </a>.
        </p>
      </div>
    </div>
  );
}
