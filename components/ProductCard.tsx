interface ProductCardProps {
  title: string;
  products: string[];
}

export default function ProductCard({ title, products }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-5 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          {title}
        </h3>
      </div>
      <div className="p-5 sm:p-6">
        <ul className="space-y-2.5 sm:space-y-3">
          {products.map((product, idx) => (
            <li key={idx} className="flex items-start text-xs sm:text-sm">
              <span className="text-blue-600 mr-2 mt-1 flex-shrink-0">◆</span>
              <span className="text-gray-700 leading-relaxed">{product}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}