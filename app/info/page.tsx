import Image from "next/image";

export default function Info() {
  return (
    <div>
      <h1>Personal Information</h1>
      
      <div className="mt-8">
        <div className="mb-8 flex justify-center">
          <Image
            src="/logo.jpg"
            alt="The Lovers by Arkadiusz Sitek"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">&ldquo;The Lovers&rdquo; (2003)</h2>
          <p className="text-gray-600 italic">by Arkadiusz Sitek</p>
        </div>
        
        <div className="prose max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed mb-6">
            This piece visualizes a topological constraint. While a sphere, a continuous 2D manifold, 
            naturally divides into 8 or 12 regular regions (corresponding to Platonic solids), it 
            cannot be analytically tiled by 10 regular polygons. I numerically forced this unorthodox 
            partition into 10 equal convex patches and rendered the result in spherical coordinates. 
            From this rigid mathematical structure, a ghost in the machine emerged: the unintended 
            figure of two lovers.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Offline</h3>
          
          <p className="leading-relaxed mb-4">
            I am an expert Bridge player and chess enthusiast, viewing these games as exercises in 
            probability and strategy. I love history and read historical fiction (a lot).
          </p>
        </div>
      </div>
    </div>
  );
}
