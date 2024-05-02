import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData,apiUrl  } from "./data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "./components/Spinner";






const App = () => {
  const [courses,setCourses]=useState(null);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);

  async function fecthData(){
    setLoading(true);
     try{
      let responce=await fetch(apiUrl);
      let output=await responce.json();
      setCourses(output.data);

     }
     catch(error){
      toast.error("network error");
     }
     setLoading(false);
  }

  useEffect(()=>{
    fecthData();
  },[]);


  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">
      <div>
       <Navbar/>
      </div>
      <div className="bg-bgDark2">

        <div> 
          <Filter filterData={filterData} 
          category={category}
          setCategory={setCategory}/>
        </div>
        <div className="w-11/12 max-w-[1000px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? <Spinner /> : <Cards courses={courses} category={category}/>}
        </div>
      </div>

    </div>
  )
};

export default App;
