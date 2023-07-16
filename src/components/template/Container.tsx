interface IContainer {
  children: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
  return (
    <div className="w-[700vw] bg-black min-h-[100vh] relative">{children}</div>
  );
};

export default Container;
