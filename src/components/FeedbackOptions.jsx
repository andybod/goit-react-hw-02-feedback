export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className="btns">
        {options.map(opt => (
          <button
            key={opt}
            onClick={onLeaveFeedback}
            className="btn"
            name={opt.toLowerCase()}
          >
            {opt}
          </button>
        ))}
      </div>
    </>
  );
};
