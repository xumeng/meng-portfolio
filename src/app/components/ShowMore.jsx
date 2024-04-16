import { useState } from "react";

export const ShowMore = ({ id, text, amountOfWords, textColor }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const splittedText = text.split(" ");
  const itCanOverflow = splittedText.length > amountOfWords;
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(" ")
    : text;
  const endText = splittedText.slice(amountOfWords - 1).join(" ");

  const handleKeyboard = (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <p id={id}>
      <span className={`${textColor}`}>{beginText} </span>
      {itCanOverflow && (
        <>
          {!isExpanded && <span>... </span>}
          <span
            className={`${textColor} ${!isExpanded && "hidden"}`}
            aria-hidden={!isExpanded}
          >
            {endText}
          </span>
          <span
            className="text-violet-400 ml-2"
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            aria-controls={id}
            onKeyDown={handleKeyboard}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </span>
        </>
      )}
    </p>
  );
};
