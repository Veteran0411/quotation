import React from "react";
import header from "../assets/header.png";
import Companyies from "../assets/Companyies.png";
import GenSpec from "./GenSpec";
import About from "./About";
import DownloadBtn from "./DownloadBtn";
import TermsAndCond from "./TermsAndCond";

const Main = () => {
  return (
    <>
      <div className=" w-a4-w h-a4-h">
        <div className="h-1/2">
          <div className="pt-2 border-b-2 border-black w-full">
            <img
              src={header}
              alt="Header Image"
              style={{ width: "1000px", height: "auto" }}
            />
          </div>

          <div className="pt-3 border-b-2 border-black w-full">
            <img src={Companyies} alt="Header Image" />
          </div>

          <div className="flex justify-between pt-1">
            <div ><strong> Name: Nandagundi Oils and Industries</strong> 
              <br/>
              <strong style={{color:"red"}}>Bauxite Road</strong>
              <br/>
              <strong>Belagavi , Karnataka</strong>
            </div>
            <div>Your Ref: Telephonic
              <br/>
              Our Ref.no: PT.DG8859.23
              <br/>
              DATE:25/12/2023
              </div>
            
          </div>
          <h1 className="pt-3 pb-4 text-3xl text-center font-bold  underline">
            Quotation
          </h1>

          <p className="text-left text-lg py-2">
            Dear Sir,
            <br />
            We thank you very much for your valuable enquiry and we are pleased
            to give you the best price for supply of the DG.
          </p>
        </div>
        <div className="h-1/2 flex items-center justify-center">
          <GenSpec />
        </div>
        <div className="h-1/2">
          <GenSpec />
        </div>
        <div className="h-1/2">
          <GenSpec />
        </div>
        <div className="h-1/2">
          <GenSpec />
        </div>
        <div className="h-1/2">
          <GenSpec />
        </div>
        <div className="h-1/2">
          <GenSpec />
        </div>
        
        <div>
          <About/>
        </div>
        <div>
          <TermsAndCond />
        </div>
        <div>
          <DownloadBtn />
        </div>
      </div>
    </>
  );
};

export default Main;
