"use client";
import React, { useState } from "react";
import useFind from "@/hooks/useFind";
import toast, { Toaster } from "react-hot-toast";
import Card from "@/components/Card";
import Link from "next/link";

function App() {
  const { data, error, isLoading, findGeo } = useFind();
  const [con, setCon] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    toast.dismiss();
    if (!con) {
      toast.error("Please enter a country name.");
      return;
    }

    const errorMessage = await findGeo(con);

    if (errorMessage) {
      toast.error(errorMessage);
    } else {
      toast.success("Country found!");
    }
  };
  return (
    <div className="max-w-xl mx-auto p-4 h-[70vh] flex justify-center items-center">
      <Toaster position="top-center" reverseOrder={false} />
      {!data ? (
        <div className="space-y-1">
          <form className="space-y-4">
            <div className="space-y-2">
              <h1 className="font-black text-3xl">Uncover the Secrets</h1>
              <p>By searching contry you ulocking secret on them</p>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Country Name</span>
              </label>
              <input
                type="text"
                onChange={(e) => setCon(e.target.value)}
                value={con}
                className="input w-full input-bordered"
                placeholder="Germany"
              />
            </div>

            <button
              type="submit"
              onClick={handleClick}
              className="btn btn-block btn-secondary"
            >
              FIND NOW
            </button>
          </form>
          <Link href='/' className="btn btn-block btn-ghost">BACK HOME</Link>{" "}
        </div>
      ) : (
        <div>
            <Card data={data[0]}/>
        </div>
      )}
    </div>
  );
}

export default App;
