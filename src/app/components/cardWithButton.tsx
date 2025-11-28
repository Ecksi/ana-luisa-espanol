export default function CardWithButton({
  children,
  buttonOne,
  buttonTwo,
}: Readonly<{
  children: React.ReactNode;
  buttonOne: React.ReactNode;
  buttonTwo: React.ReactNode;
}>) {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="borders bg-camel mb-12 rounded-lg shadow-sm">
        <div className="flex w-full items-center justify-between space-x-6 p-6">
          <div className="flex-1">{children}</div>
        </div>
        <hr />
        <div>
          <div className="-mt-px flex divide-x-4 divide-rope">
            <div className="flex w-0 flex-1 relative -mr-px items-center justify-center gap-x-3 rounded-bl-lg border-t-4 border-t-rope py-4 text-sm text-amber-950 font-semibold">
              {buttonOne}
            </div>
            <div className="flex w-0 flex-1 relative -ml-px items-center justify-center gap-x-3 rounded-br-lg border-t-4 border-t-rope py-4 text-sm text-amber-950 font-semibold">
              {buttonTwo}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
