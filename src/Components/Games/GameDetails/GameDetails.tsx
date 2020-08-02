import React, { useEffect } from "react";

const GameDetails = (props: any) => {
  useEffect(() => {
    console.log("useEffect");
  });

  return (
    <div>
      <h1>Game Details</h1>
    </div>
  );
};

export default GameDetails;
