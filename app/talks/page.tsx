export default function Talks() {
  return (
    <div>
      <h1>Talks & Podcasts</h1>

      <h2>Invited Talks</h2>
      <div className="space-y-6 mb-8">
        <div>
          <h3>Talk Title at Conference/University</h3>
          <p className="text-gray-600">Date, Location</p>
          <p className="mt-2">
            <a href="#" className="text-primary mr-4">Slides</a>
            <a href="#" className="text-primary">Video</a>
          </p>
        </div>

        <div>
          <h3>Another Talk Title</h3>
          <p className="text-gray-600">Date, Location</p>
          <p className="mt-2">
            <a href="#" className="text-primary mr-4">Slides</a>
            <a href="#" className="text-primary">Video</a>
          </p>
        </div>
      </div>

      <h2>Podcasts & Interviews</h2>
      <div className="space-y-6">
        <div>
          <h3>Podcast Name</h3>
          <p className="text-gray-600">Date</p>
          <p className="mt-2">
            <a href="#" className="text-primary">Listen</a>
          </p>
        </div>

        <div>
          <h3>Interview Title</h3>
          <p className="text-gray-600">Date</p>
          <p className="mt-2">
            <a href="#" className="text-primary">Watch/Read</a>
          </p>
        </div>
      </div>

      <h2 className="mt-8">Tutorials</h2>
      <div className="space-y-4">
        <div>
          <h3>Tutorial on Your Research Area</h3>
          <p className="text-gray-700 mb-2">
            A comprehensive tutorial covering [topic].
          </p>
          <p>
            <a href="#" className="text-primary">View Tutorial</a>
          </p>
        </div>
      </div>
    </div>
  );
}

