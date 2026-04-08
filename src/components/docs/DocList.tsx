export function UL({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-5 space-y-2 mb-4">{children}</ul>;
}

export function LI({ children }: { children: React.ReactNode }) {
  return <li className="text-gray-600">{children}</li>;
}