const Step4 = ({ setCurrentStep }) => {
  const handleSubmit = () => {
    setCurrentStep(4);
  };

  return (
    <div className="h-130">
      <p className="text-[40px] font-[500] bg-gradient-to-r from-[#0066FF] to-[#00CAFF] bg-clip-text text-transparent">
        Payment
      </p>
      <button
        onClick={handleSubmit}
        className="w-full py-3 cursor-pointer my-4 text-white text-[20px] font-semibold bg-[radial-gradient(circle,#00CAFF_2%,#0066FF_120%)] rounded-full shadow-lg hover:opacity-90 transition-all"
      >
        Next
      </button>
    </div>
  );
};

export default Step4;
