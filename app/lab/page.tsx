export default function Lab() {
  return (
    <div>
      <h1>Lab</h1>
      <p className="text-lg mb-6">
        Welcome to our research lab! We work on exciting problems in [your research area].
      </p>

      <h2>Research Areas</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Research Area 1</li>
        <li>Research Area 2</li>
        <li>Research Area 3</li>
      </ul>

      <h2>Lab Members</h2>
      <div className="space-y-6">
        <div>
          <h3>PhD Students</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Student Name 1</li>
            <li>Student Name 2</li>
          </ul>
        </div>

        <div>
          <h3>Postdocs</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Postdoc Name</li>
          </ul>
        </div>

        <div>
          <h3>Collaborators</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Collaborator Name 1</li>
            <li>Collaborator Name 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

