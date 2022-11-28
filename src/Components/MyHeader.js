const MyHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <header className=" py-5 flex items-center">
      <div className="w-1/4 justify-start">{leftChild}</div>
      <div className="w-2/4 justify-center text-ceneter">{headText}</div>
      <div className="w-1/4 justify-end">{rightChild}</div>
    </header>
  );
};

export default MyHeader;
