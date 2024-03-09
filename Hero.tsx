import Image from "next/image";
import React from "react";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { BsTelephoneForwardFill } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="flex flex-col  bg-slate-400 items-center w-1/2  ">
      <div className="py-4 text-center text-6xl font-bold leading-tight text-cyan-950">
        Nos forfaits sans engagement B&You
      </div>

      <div className="flex bg-cyan-700  text-center rounded-t-lg w-1/2 self-center items-center justify-center  h-16  text-slate-50 text-3xl font-semibold">
        Bon plan
      </div>
      <div className="flex flex-col bg-cyan-900 mx-60 items-center justify-center  rounded-xl w-3/5 h-52   text-slate-50 text-3xl   ">
        <span className="font-bold">
          <span className="text-8xl">7</span>

          <sup className="text-6xl">€99</sup>
          <sub className="-left-32 text-4xl font-light">/mois</sub>
        </span>

        <span className="pt-2 self-center text-4xl font-medium">
          sans engagement
        </span>
      </div>
      <div className="flex py-4 text-center text-4xl font-bold leading-tight text-cyan-950">
        Sélectionnez votre forfait Internet
      </div>
      <div className="flex  space-x-2  ">
        <div className="flex border-solid border-2 border-blue-500 h-24 w-44 items-center justify-center text-center bg-slate-300 rounded-md	">
          10 GO
        </div>
        <div className="flex border-solid border-2 border-blue-500 h-24 w-44 items-center justify-center text-center bg-slate-300 rounded-md	">
          20 GO
        </div>
        <div className="flex border-solid border-2 border-blue-500 h-24 w-44 items-center justify-center text-center bg-slate-300 rounded-md	">
          100 GO
        </div>
        <div className="flex border-solid border-2 border-blue-500 h-24 w-44 items-center justify-center text-center bg-slate-300 rounded-md	">
          200 GO
        </div>
      </div>
      <div className="flex py-4 text-center text-4xl font-bold leading-tight text-cyan-950">
        Et si vous boostiez votre forfait ?
      </div>
      <div className="flex  space-x-2  w-full justify-center">
        <div className="flex border-solid border-2 rounded-md w-1/3  h-28 items-center justify-center text-center bg-cyan-900">
          <div className="text-white">4G inclus</div>
        </div>
        <div className="flex border-solid border-2 rounded-md w-1/3 h-28 items-center justify-center text-center	">
          5G + 3£/mois
        </div>
      </div>
      <div className="flex my-2 p-8 space-x-2 bg-slate-200 rounded-lg w-4/6 mt-8">
        <Image src="/fibre.webp" alt="fibre" width={100} height={100} />

        <div>
          <h1 className="font-bold">NOUVEAU : Exclu client B&You</h1>
          <div className="text-lg">
            Bénéficiez d’une offre box fibre WiFi 6 +TV 180 chaînes à
            29,99€/mois*. Sans engagement. Souscription à l’étape 2 du panier.
          </div>
        </div>
      </div>
      <button className="bg-orange-600 w-5/6 h-11 rounded-lg text-white font-bold mt-8">
        Je choisi ce Forfait
      </button>
      <div className="font-bold text-sky-900 text-2xl">
        Inclus dans ce forfait 20Go 4G
      </div>
      <div className="flex my-2 text-white bg-slate-600 mx-60  h-16 w-5/6 items-center justify-center rounded-lg">
        Qualité du réseau Bouygues Telecom
      </div>
      <div className="flex justify-between text-white bg-slate-600 mx-60  h-16 w-5/6 items-center rounded-lg text-xs ">
        <div className="flex w-1/2 space-x-2">
          <BiSolidPlaneAlt />
          <b>16Go</b> utilisable en Europe/DOM
        </div>
        <div className="flex space-x-2 w-1/2">
          <BsTelephoneForwardFill />
          <div>Appels & SMS/MMS illimités en France métropolitaine</div>
        </div>
      </div>
      <div className="underline text-cyan-900 font-semibold mb-4">
        Afficher les autres forfaits B&You
      </div>
      <div className="underline text-cyan-900 font-semibold">
        Mentions légales
      </div>
    </div>
  );
}
