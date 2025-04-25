
export function Button({ children, className, asChild }) {
  const Comp = asChild ? "span" : "button";
  return (
    <Comp className={`rounded-xl px-4 py-2 font-medium transition ${className}`}>
      {children}
    </Comp>
  );
}
