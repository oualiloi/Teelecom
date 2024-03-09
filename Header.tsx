"use client";
import React, { Component } from "react";
import Image from "next/image";
import { FaCartShopping, FaUser } from "react-icons/fa6";

export default class Header extends Component {
  render() {
    return (
      <div className="flex justify-between ">
        <Image
          className="ml-10 m-2"
          src="/bouygues.svg"
          alt="logo"
          width={150}
          height={150}
        />
        <div className="flex space-x-4 mr-2 mt-4 ">
          <span className="py-3">
            <FaCartShopping />
          </span>
          <span className="pt-2">PANIER</span>
          <button className="flex space-x-2  rounded-full  bg-cyan-900  w-72  h-16 items-center justify-center text-white ">
            <FaUser className="mt-1" />
            <span>SE CONNECTER</span>
          </button>
        </div>
      </div>
    );
  }
}
