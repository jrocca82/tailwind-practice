import React from "react";
import Image from "next/image";

const CardComponent = ({
  imageUrl,
  headerText,
  descriptionText,
  buttonText,
}: {
  imageUrl: string;
  headerText: string;
  descriptionText: string;
  buttonText: string;
}) => {
  return (
    <div
      className="align-center justify-center rounded bg-card text-card-foreground shadow-lg hover:scale-105"
    >
      <div style={{ height: "300px", width: "300px", overflow: "hidden" }}>
        <Image
          src={imageUrl}
          alt="Card Visual"
          height={300}
          width={300}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col justify-center p-6 align-middle">
        <div className="mb-2 text-xl font-bold">{headerText}</div>
        <p className="text-base">{descriptionText}</p>

        <button className="my-3 rounded bg-primary px-4 py-2 font-bold text-primary-foreground hover:bg-accent">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
