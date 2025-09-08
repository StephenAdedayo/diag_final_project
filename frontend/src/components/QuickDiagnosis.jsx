import React, { useContext, useState } from "react";
import { diaContext } from "../context/DiaContext";
import axios from "axios";
import { toast } from "react-toastify";
import logo from "../assets/loading.png";


const QuickDiagnosis = () => {
  const { backendUrl } = useContext(diaContext);
  const [prediction, setPrediction] = useState("");
  const [Age, setAge] = useState("");
  const [Gender, setGender] = useState("");
  const [Polyuria, setPolyuria] = useState("");
  const [Polydipsia, setPolydipsia] = useState("");
  const [SuddenWeightLoss, setSuddenWeightLoss] = useState("");
  const [weakness, setWeakness] = useState("");
  const [Polyphagia, setPolyphagia] = useState("");
  const [GenitalThrush, setGenitalThrush] = useState("");
  const [VisualBlurring, setVisualBlurring] = useState("");
  const [Itching, setItching] = useState("");
  const [Irritability, setIrritability] = useState("");
  const [DelayedHealing, setDelayedHealing] = useState("");
  const [PartialParesis, setPartialParesis] = useState("");
  const [MuscleStiffness, setMuscleStiffness] = useState("");
  const [Alopecia, setAlopecia] = useState("");
  const [Obesity, setObesity] = useState("");
  const [loading, setLoading] = useState(false)

  const predictDiabetes = async (e) => {
    e.preventDefault();
    try {
      // const formData = new FormData()
         setLoading(true)
      const { data } = await axios.post(backendUrl + "/api/model/predict", {
        Age,
        Gender,
        Polyuria,
        Polydipsia,
        SuddenWeightLoss,
        weakness,
        Polyphagia,
        GenitalThrush,
        VisualBlurring,
        Itching,
        Irritability,
        DelayedHealing,
        PartialParesis,
        MuscleStiffness,
        Alopecia,
        Obesity,
      });
      if (data.success) {
        setLoading(false)
        setPrediction(`${data.data}`)
        toast.success(`You test ${data.data} for diabetes`)
      } else {
        setPrediction("Prediction failed.");
      }
      setAge("");
      setAlopecia("");
      setDelayedHealing("");
      setGender("");
      setItching("");
      setMuscleStiffness("");
      setObesity("");
      setPartialParesis("");
      setPolydipsia("");
      setPolyphagia("");
      setPolyuria("");
      setGenitalThrush("");
      setIrritability("");
      setVisualBlurring("");
      setWeakness("");
      setSuddenWeightLoss("");
    } catch (error) {
      console.log(error.message);
    }
  };

   if (loading) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 grid place-items-center bg-[#EFFBFF]/70 backdrop-blur-md">
      <div className="flex flex-col items-center gap-4">
        <img
          src={logo} // make sure to replace with your actual image path
          alt="Loading..."
          className="w-20 h-20 animate-spin"
        />
      </div>
    </div>
  );
}


  return (
    <div className="w-full overflow-hidd min-h-screen sm:px-5 lg:px-40  flex flex-col  lg:flex-row">
      <div className="bg-[#2F73F2] hidden flex-[50%] text-center xl:flex justify-center items-center lg:min-h-screen min-h-[50vh] text-[40px] text-white w-full ">
        <p>
          Get Quick Free <br /> Diagnosis
        </p>
      </div>

      <div className="sm:p-5 p-3 sm:rounded-[0px] rounded-md min-h-screen bg-[#65c3f3] flex-[50%] ">
        <p className="text-center text-white xl:hidden max-md:mb-10 block md:text-[35px] text-[25px]">
          Get Quick Free Diagnosis
        </p>

        <div className=" min-h-screen flex items-center justify-center ">
          <form
            onSubmit={predictDiabetes}
            className="bg-white  md:p-10 p-5 w-full min-h-screen sm:rounded-[0px] rounded-md  space-y-3"
          >
            <div className="flex flex-col md:flex-row w-full gap-5">
              <div htmlFor="" className="flex flex-col gap-3 w-full">
                <p>Age</p>
                <input
                  value={Age}
                  onChange={(e) => setAge(e.target.value)}
                  type="text"
                  placeholder="Age"
                  className="outline-none  border w-full border-[#547593] px-2 py-3"
                required/>
              </div>

              <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Gender</p>
                <select
                  value={Gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="outline-none w-full border border-[#547593] px-2 py-3"
                  > 
                  <option value="" disabled>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                  </select>
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Polyuria</p>
                <select
                  value={Polyuria}
                  onChange={(e) => setPolyuria(e.target.value)}
                  className="outline-none w-full  border border-[#547593] px-2 py-3"
                  >
                <option value="" disabled>Polyuria</option>
 
                <option value="Yes">Yes</option>
                <option value="No">No</option>

                  </select>
              </label>

               <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Polydipsia</p>
                <select
                  value={Polydipsia}
                  onChange={(e) => setPolydipsia(e.target.value)}
                  className="outline-none w-full  border border-[#547593] px-2 py-3"
                  > 
                 <option value="" disabled>Polydipsia</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>

                  </select>
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
             <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>SuddenWeightLoss</p>
                <select
                  value={SuddenWeightLoss}
                  onChange={(e) => setSuddenWeightLoss(e.target.value)}
                  className="outline-none w-full  border border-[#547593] px-2 py-3"
                  > 
                <option value="" disabled>SuddenWeightLoss</option> 
                <option value="Yes">Yes</option>
                <option value="No">No</option>

                  </select>
              </label>

              <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Weakness</p>
                <select
                  value={weakness}
                  onChange={(e) => setWeakness(e.target.value)}
                  className="outline-none w-full  border border-[#547593] px-2 py-3"
                  >                                
                  <option value="" disabled>Weakness</option>
 
                <option value="Yes">Yes</option>
                <option value="No">No</option>

                  </select>
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
             <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Polyphagia</p>
                <select
                  value={Polyphagia}
                  onChange={(e) => setPolyphagia(e.target.value)}
                  className="outline-none w-full  border border-[#547593] px-2 py-3"
                  > 
                                    <option value="" disabled>Polyphagia</option>

                <option value="Yes">Yes</option>
                <option value="No">No</option>

                  </select>
              </label>

              <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Genital Thrush</p>
                <select
                  value={GenitalThrush}
                  onChange={(e) => setGenitalThrush(e.target.value)}
                  className="outline-none w-full  border border-[#547593] px-2 py-3"
                  > 
                                    <option value="" disabled>Genital Thrush</option>

                <option value="Yes">Yes</option>
                <option value="No">No</option>

                  </select>
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
             <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Visual Blurring</p>
                <select
                  value={VisualBlurring}
                  onChange={(e) => setVisualBlurring(e.target.value)}
                  className="outline-none w-full  border border-[#547593] px-2 py-3"
                  > 
                                    <option value="" disabled>Visual Blurring</option>

                <option value="Yes">Yes</option>
                <option value="No">No</option>

                  </select>
              </label>

              <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Itching</p>
                <select
                  value={Itching}
                  onChange={(e) => setItching(e.target.value)}
                  className="outline-none w-full  border border-[#547593] px-2 py-3"
                  > 
                                    <option value="" disabled>Itching</option>

                <option value="Yes">Yes</option>
                <option value="No">No</option>

                  </select>
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Irritability</p>
                <select
                  value={Irritability}
                  onChange={(e) => setIrritability(e.target.value)}
                  className="outline-none w-full  border border-[#547593] px-2 py-3"
                  > 
                                    <option value="" disabled>Irritability</option>

                <option value="Yes">Yes</option>
                <option value="No">No</option>

                  </select>
              </label>

           <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Delayed Healing</p>
                <select
                  value={DelayedHealing}
                  onChange={(e) => setDelayedHealing(e.target.value)}
                  className="outline-none w-full  border border-[#547593] px-2 py-3"
                  > 
                                    <option value="" disabled>Delayed Healing</option>

                <option value="Yes">Yes</option>
                <option value="No">No</option>

                  </select>
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
             <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Partial Paresis</p>
                <select
                  value={PartialParesis}
                  onChange={(e) => setPartialParesis(e.target.value)}
                  className="outline-none w-full  border border-[#547593] px-2 py-3"
                  > 
                                    <option value="" disabled>Partial Paresis</option>

                <option value="Yes">Yes</option>
                <option value="No">No</option>

                  </select>
              </label>

              <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Muscle Stiffness</p>
                <select
                  value={MuscleStiffness}
                  onChange={(e) => setMuscleStiffness(e.target.value)}
                  className="outline-none w-full  border border-[#547593] px-2 py-3"
                  > 
                                    <option value="" disabled>Muscle Stiffness</option>

                <option value="Yes">Yes</option>
                <option value="No">No</option>

                  </select>
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
             <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Alopecia</p>
                <select
                  value={Alopecia}
                  onChange={(e) => setAlopecia(e.target.value)}
                  className="outline-none w-full  border border-[#547593] px-2 py-3"
                  > 
                                    <option value="" disabled>Alopecia</option>

                <option value="Yes">Yes</option>
                <option value="No">No</option>

                  </select>
              </label>

          <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Obesity</p>
                <select
                  value={Obesity}
                  onChange={(e) => setObesity(e.target.value)}
                  className="outline-none w-full  border border-[#547593] px-2 py-3"
                  > 
                                    <option value="" disabled>Obesity</option>

                <option value="Yes">Yes</option>
                <option value="No">No</option>

                  </select>
              </label>
            </div>

            <button
              type="submit"
              className="px-6 py-3 border text-[#2F73F2] border-[#2F73F2]"
            >
              Submit 
            </button>

            <div className="">Prediction: <span className="text-[#2F73F2] font-bold uppercase">{prediction}</span></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickDiagnosis;
