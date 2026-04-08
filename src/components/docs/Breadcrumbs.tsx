"use client";

export default function Breadcrumbs({
  slug,
}: {
  slug: string[];
}) {
  const format = (str: string) =>
    str
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
      {slug.map((part, index) => {
        const isLast = index === slug.length - 1;

        return (
          <span key={index} className="flex items-center gap-2 text-base">
            
            {/* Text */}
            <div
              className={`transition ${
                isLast
                  ? "text-gray-900 font-semibold "
                  : "text-gray-500"
              }`}
            >
              {format(part)}
            </div>

            {/* Separator */}
            {!isLast && <span className="text-gray-400">›</span>}
          </span>
        );
      })}
    </div>
  );
}