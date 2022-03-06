import React from "react";

const Commits = () => {
  return (
    <div>
      <h2 className="text-white">700 Contributions last year</h2>
      <div className="border-solid border border-sky-500">
        <svg height="101" width="640">
          {Array.from({ length: 40 }).map((_, j) => (
            <g key={j} transform={`translate(${j * 16}, 0)`}>
              {Array.from({ length: 7 }).map((_, i) => (
                <rect key={i} y={i * 15} width="11" height="11" fill="green" />
              ))}
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default Commits;
