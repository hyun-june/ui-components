const SuccessAnimation = () => {
  return (
    <div className="animation-wrapper">
      <svg className="circle-svg" viewBox="0 0 100 100">
        <circle className="circle-border" cx="50" cy="50" r="45" />
        <circle className="circle-bg" cx="50" cy="50" r="45" />

        <path d="M32 52 L44 64 L70 38" className="check" />
      </svg>
    </div>
  );
};

export default SuccessAnimation;
