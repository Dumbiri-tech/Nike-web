import React from "react";
import Button from "../Components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section
      className="flex justify-wrap
     items-center
      max-xl:flex-col-reverse
      gap-10 max-container"
    >
      <div>
        <img
          src={offer}
          width={573}
          height={600}
          className="
        object-contain "
        />
      </div>
      <div
        className="flex flex-1 
         flex-col"
      >
        <h2
          className="font-palanquin text-4xl
     capitalize 
  font-bold lg:max-w-lg"
        >
          <span
            className="text-coral-red
    "
          >
            Special
          </span>{" "}
          Offer
        </h2>
        <p
          className="
  mt-4 lg:max-w-lg info-text "
        >
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text ">
          Ou dedication to details and excellence ensures your satsfaction
        </p>
        <div
          className="mt-11 flex 
        flex-wrap gap-4"
        >
          <Button label="View details" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
