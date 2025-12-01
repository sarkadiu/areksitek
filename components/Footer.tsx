export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-gray-600">
        <p>
          © Copyright {new Date().getFullYear()} Your Name.{" "}
          Last updated: {new Date().toLocaleDateString("en-US", { 
            year: "numeric", 
            month: "long", 
            day: "numeric" 
          })}.
        </p>
      </div>
    </footer>
  );
}

