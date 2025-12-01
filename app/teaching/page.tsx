export default function Teaching() {
  return (
    <div>
      <h1>Teaching</h1>

      <h2>Current Courses (Spring 2025)</h2>
      <div className="mb-8">
        <h3>COS XXX: Your Course Title</h3>
        <p className="text-gray-700 mb-2">
          This course covers [brief description of the course].
        </p>
        <p>
          <a href="#" className="text-primary">Course Website</a>
        </p>
      </div>

      <h2>Past Courses</h2>
      <div className="space-y-6">
        <div>
          <h3>Fall 2024: Another Course</h3>
          <p className="text-gray-700">
            [Brief description]
          </p>
        </div>

        <div>
          <h3>Spring 2024: Course Name</h3>
          <p className="text-gray-700">
            [Brief description]
          </p>
        </div>
      </div>

      <h2 className="mt-8">Teaching Philosophy</h2>
      <div className="prose max-w-none">
        <p>
          I believe in [your teaching philosophy]. My courses emphasize [key aspects].
        </p>
      </div>
    </div>
  );
}

