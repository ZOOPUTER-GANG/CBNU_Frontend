const Child1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-red-400 h-[500px]">
      Child1
      <div>{children}</div>
    </div>
  );
};

export default Child1;
