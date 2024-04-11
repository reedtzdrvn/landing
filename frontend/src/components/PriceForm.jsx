import React, { useState } from "react";
import axios from "../axios.js"

const PriceForm = () => {
  const [minutesFromMetro, setMinutesFromMetro] = useState(null);
  const [numberOfRooms, setNumberOfRooms] = useState(null);
  const [apartmentArea, setApartmentArea] = useState(null);
  const [bedroomArea, setBedroomArea] = useState(null);
  const [kitchenArea, setKitchenArea] = useState(null);
  const [floorNumber, setFloorNumber] = useState(null);
  const [totalFloors, setTotalFloors] = useState(null);
  const [district, setDistrict] = useState(0);
  const [renovation, setRenovation] = useState(0)
  const [predictPrice, setPredictPrice] = useState(null)

  const districtOptions = [
    "Восточный административный округ",
    "Западный административный округ",
    "Новомосковский административный округ",
    "Северный административный округ",
    "Северо-Восточный административный округ",
    "Северо-Западный административный округ",
    "Центральный административный округ",
    "Юго-Восточный административный округ",
    "Юго-Западный административный округ",
    "Южный административный округ",
  ];

  const renovationOptions = [
    'Без ремонта',
    'Дизайнерский',
    'Европейский',
    'Косметический'
  ]

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let res = [parseInt(minutesFromMetro), parseInt(numberOfRooms), parseInt(apartmentArea), parseInt(bedroomArea), parseInt(kitchenArea), parseInt(floorNumber), parseInt(totalFloors)]
    res.push(...districtOptions.map((option, index) => (index == district ? 1 : 0)))
    res.push(...renovationOptions.map((option, index) => (index == renovation ? 1 : 0)))
    axios.post(`/predict`, { "params": res})
    .then((response) => {
      setPredictPrice(response.data.price)
    })
    .catch((error) => {
      console.error("Ошибка при подсчете цены", error);
    });
  };

  return (
    <div className="mt-40 max-w-xl mx-auto">
      <form
        onSubmit={handleFormSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Количество минут от метро:
          </label>
          <input
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={minutesFromMetro}
            onChange={(e) => setMinutesFromMetro(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Количество комнат в квартире:
          </label>
          <input
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={numberOfRooms}
            onChange={(e) => setNumberOfRooms(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Площадь квартиры:
          </label>
          <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={apartmentArea}
              onChange={(e) => setApartmentArea(e.target.value)}
            />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Площадь спален:
          </label>
          <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={bedroomArea}
              onChange={(e) => setBedroomArea(e.target.value)}
            />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Площадь кухни:
          </label>
          <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={kitchenArea}
              onChange={(e) => setKitchenArea(e.target.value)}
            />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Номер этажа:
          </label>
          <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={floorNumber}
              onChange={(e) => setFloorNumber(e.target.value)}
            />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Количество этажей в доме:
          </label>
          <input
              type="number"
              value={totalFloors}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setTotalFloors(e.target.value)}
            />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Выберите округ:
          </label>
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="block appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option hidden>Выберите округ</option>
            {districtOptions.map((district, index) => (
              <option key={index} value={index}>
                {district}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
            Выберите тип ремонта:
          </label>
          <select
            value={renovation}
            onChange={(e) => setRenovation(e.target.value)}
            className="block appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option hidden>Выберите округ</option>
            {renovationOptions.map((renovation, index) => (
              <option key={index} value={index}>
                {renovation}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-[#465373] hover:bg-[#5c75b5] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Отправить
          </button>
          {predictPrice}
        </div>
      </form>
    </div>
  );
};

export default PriceForm;
