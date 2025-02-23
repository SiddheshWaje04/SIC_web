"use client"
import React, { useState } from 'react';
const id=15;
const PLForm = () => {
  const SETitem=(e,setvariable,variable)=>{
    var formDetails = JSON.parse(localStorage.getItem("form_details")) || {};
    formDetails[id] = formDetails[id] || {};
    formDetails[id][variable]= e.target.value;
    localStorage.setItem("form_details", JSON.stringify(formDetails));
    setvariable(e.target.value)

}
const GETitem=(def,variable)=>{

  
  if (typeof window !== "undefined" && localStorage.getItem("form_details")) {
      const formDetails = JSON.parse(localStorage.getItem("form_details"));
      if (formDetails[id] && formDetails[id][variable]) {
          return formDetails[id][variable];
      }
      
  }
  return def;
}

  const [natureOfSample, setNatureOfSample] = useState(GETitem(null,"natureOfSample"));
  const [noOfSamples, setNoOfSamples]=useState(GETitem(null,"noOfSamples"));
  const [nonconductive, setonductive] = useState(GETitem(null,"noOfSamples"));
  const [conductive, setConductive] = useState({
    conductive:GETitem(null,"conductive"),
    nonconductive:GETitem(null,"nonconductive")
  });
  const [description,setDescription]=useState({
    SEM:GETitem(null,"SEM"),
    EDX:GETitem(null,"EDX"),
    WDX:GETitem(null,"WDX")
  }
  )
  const [expectedElements,setExpectedElements]=useState(GETitem(null,"expectedElements"));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (send data to server)
    console.log('Form Data:', { natureOfSample, noOfSamples, conductive, description,expectedElements });
  };

  const handleConductiveChange=(option)=>{
    setConductive({
        ...conductive,
        [option]:!conductive[option],
    });
  };

  const handleDescriptionChange=(option)=>{
    setDescription({
        ...description,
        [option]:!description[option],
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mx-auto text-3xl font-bold mb-4">Photo-luminescence (Field Emission Scanning Electron Microscope) Form</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
          <label htmlFor="natureOfSample" className="block text-gray-700 text-sm font-bold mb-2">
            Nature of Sample
          </label>
          <textarea
            id="natureOfSample"
            value={natureOfSample}
            onChange={(e) => SETitem(e,setNatureOfSample,"natureOfSample")}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Kindly intimate if toxic"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="noOfSamples" className="block text-gray-700 text-sm font-bold mb-2">
            No of Sample
          </label>
          <textarea
            id="noOfSamples"
            value={noOfSamples}
            onChange={(e) => SETitem(e,setNoOfSamples,"noOfSamples")}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="No of sample"
            required
          />
        </div>        


        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">Conductivity</p>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="Conductive"
              checked={conductive.conductive}
              onChange={(e) => SETitem(e,setConductive,"conductive")}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Conductive</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              value="nonconductive"
              checked={conductive.nonconductive}
              onChange={(e) => SETitem(e,setConductive,"nonconductive")}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Non-conductive</span>
          </label>
        </div>

        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">Description of requirement</p>

          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="SEM"
              
              checked={description.SEM}
              onChange={(e) => SETitem(e,setDescription,"SEM")}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">SEM</span>
          </label>
          <label className="inline-flex items-center ml-2">
            <input
              type="checkbox"
              value="EDM"
              
              checked={description.EDM}
              onChange={(e) => SETitem(e,setDescription,"EDM")}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">EDM</span>
          </label>
          <label className="inline-flex items-center ml-2">
            <input
              type="checkbox"
              value="WDX"
              
              checked={description.WDX}
              onChange={(e) => SETitem(e,setDescription,"WDX")}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2">WDX</span>
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="natureOfSample" className="block text-gray-700 text-sm font-bold mb-2">
            EDX/WDX Expected elements
          </label>
          <textarea
            id="expectedElements"
            value={expectedElements}
            onChange={(e) => SETitem(e,setExpectedElements,"expectedElements")}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter..."
            required
          />
        </div>
        
       
      </form>
    </div>
  );
};

export default PLForm;
