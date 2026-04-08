export function Callout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-md my-4">
      <p className="text-green-800 text-sm">{children}</p>
    </div>
  );
}