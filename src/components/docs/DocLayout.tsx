export default function DocLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-4xl mx-auto pt-4 pb-4 mt-15">
      {children}
    </div>
  );
}