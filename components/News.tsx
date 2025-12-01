import { newsItems } from "@/data/news";

export default function News() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">news</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {newsItems.map((item, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-4 px-4 align-top whitespace-nowrap font-semibold text-gray-700">
                  {item.date}
                </td>
                <td className="py-4 px-4">
                  <div 
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

