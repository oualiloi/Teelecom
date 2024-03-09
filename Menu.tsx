import React from "react";

export default function Menu() {
  return (
    <div>
      <ul className="flex justify-center space-x-4 font-medium  text-gray-700 border-b-2 py-2">
        <a href="#">
          <li>Forfaits B&You</li>
        </a>
        <a href="">
          <li>Forfaits Bouygues Telecom</li>
        </a>

        <a href="">
          <li>Téléphones</li>
        </a>

        <a href="">
          <li>Box internet</li>
        </a>

        <a href="">
          <li>Box + mobile</li>
        </a>
        <a href="">
          <li>Promos</li>
        </a>

        <a href="">
          <li>Nous découvrir</li>
        </a>
      </ul>
    </div>
  );
}
