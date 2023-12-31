"use client";
import { useUserContextHook } from "@/app/hooks/contexts/UserContext";
import { countries } from "countries-list";
import { useSession } from "next-auth/react";
import { useState } from "react";

const NewAddress = () => {
  const countriesList = Object.values(countries);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [country, setCountry] = useState("");
  const { handleCreateAddressSubmit } = useUserContextHook();

  // get userid from session
  const { data: session } = useSession();
  const userId = session?.user?.id;

  return (
    <>
      <div
        style={{ maxWidth: "480px" }}
        className="mt-1 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
      >
        <form
          onSubmit={(e) =>
            handleCreateAddressSubmit(
              e,
              userId,
              street,
              city,
              state,
              phoneNo,
              zipcode,
              country
            )
          }
        >
          <h2 className="mb-5 text-2xl font-semibold">Add new Address</h2>

          <div className="mb-4 md:col-span-2">
            <label className="block mb-1"> Street </label>
            <input
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="text"
              placeholder="Type your street"
              onChange={(e) => setStreet(e.target.value)}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-x-3">
            <div className="mb-4 md:col-span-1">
              <label className="block mb-1"> City </label>
              <input
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="text"
                placeholder="Type your city"
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div className="mb-4 md:col-span-1">
              <label className="block mb-1"> State </label>
              <input
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="text"
                placeholder="Type state here"
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-2">
            <div className="mb-4 md:col-span-1">
              <label className="block mb-1"> ZIP code </label>
              <input
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="number"
                placeholder="Type zip code here"
                onChange={(e) => setZipcode(e.target.value)}
                required
              />
            </div>

            <div className="mb-4 md:col-span-1">
              <label className="block mb-1"> Phone No </label>
              <input
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="number"
                placeholder="Type phone no here"
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-4 md:col-span-2">
            <label className="block mb-1"> Country </label>
            <select
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              onChange={(e) => setCountry(e.target.value)}
              required
            >
              {countriesList.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
          >
            Add Address
          </button>
        </form>
      </div>
    </>
  );
};

export default NewAddress;
