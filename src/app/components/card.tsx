export default function Card({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="borders bg-camel mb-12 rounded-lg shadow-sm">
        <div className="flex w-full items-center justify-between space-x-6 p-6">
          <div className="flex-1 relative text-amber-950">{children}</div>
        </div>
      </div>
    </div>
  );
}
