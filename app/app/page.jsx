import React from "react";

function App() {
  return (
    <div className="max-w-xl mx-auto p-4 h-[70vh] flex justify-center items-center">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="font-black text-3xl">
            Uncover the Secrets
          </h1>
          <p>By searching contry you ulocking secret on them</p>
        </div>
        <div>
            <label className="label">
                <span className="label-text">Country Name</span>
            </label>
            <input type="text" className="input w-full input-bordered" placeholder="Germany" />
        </div>
        <div className="space-y-1">
            <button className="btn btn-block btn-secondary">FIND</button>
            <button className="btn btn-block btn-ghost">BACK HOME</button>
        </div>
      </div>
    </div>
  );
}

export default App;
