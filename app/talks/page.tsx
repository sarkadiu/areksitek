export default function Talks() {
  return (
    <div>
      <h1>Talks & Presentations</h1>

      <h2>Invited Talks</h2>
      <div className="space-y-6 mb-8">
        <div>
          <h3>AI-Driven Solutions in Medical Imaging</h3>
          <p className="text-gray-600">Massachusetts General Hospital, 2024</p>
          <p className="mt-2">
            <a href="#" className="text-primary mr-4">Slides</a>
            <a href="#" className="text-primary">Video</a>
          </p>
        </div>

        <div>
          <h3>Statistical Computing in Nuclear Imaging</h3>
          <p className="text-gray-600">University of British Columbia, 2023</p>
          <p className="mt-2">
            <a href="#" className="text-primary mr-4">Slides</a>
          </p>
        </div>
      </div>

      <h2>Conference Presentations</h2>
      <div className="space-y-6">
        <div>
          <h3>Advanced Methods in Medical Image Analysis</h3>
          <p className="text-gray-600">2024</p>
          <p className="mt-2">
            <a href="#" className="text-primary">Slides</a>
          </p>
        </div>

        <div>
          <h3>AI Applications in Healthcare</h3>
          <p className="text-gray-600">2023</p>
          <p className="mt-2">
            <a href="#" className="text-primary">Slides</a>
          </p>
        </div>
      </div>

      <h2 className="mt-8">Tutorials & Workshops</h2>
      <div className="space-y-4">
        <div>
          <h3>Introduction to Statistical Computing in Medical Imaging</h3>
          <p className="text-gray-700 mb-2">
            A comprehensive tutorial covering statistical methods and computational techniques for medical imaging applications.
          </p>
          <p>
            <a href="#" className="text-primary">View Materials</a>
          </p>
        </div>
      </div>
    </div>
  );
}

