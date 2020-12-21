import React from "react";
import { ReactComponent as Star } from "../../assets/icons/star.svg";

interface Props {
  rating: number;
}

export function Rating({ rating }: Props): React.ReactElement<Props> {
  const halfRating = Math.round(rating / 2);
  const stars = new Array(5).fill(0);

  return (
    <div>
      {stars.map((star: number, index: number) => (
        <Star
          key={index}
          style={{
            fill: halfRating > index ? "#f8b22f" : "transparent",
            stroke: "#f8b22f",
            strokeWidth: 1,
            width: "2.5em",
            height: "2em",
          }}
        />
      ))}
    </div>
  );
}
