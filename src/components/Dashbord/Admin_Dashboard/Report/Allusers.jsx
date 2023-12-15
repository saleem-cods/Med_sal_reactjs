import React,{useState} from 'react'
import Chart from './Chart'
import {userData} from "./ReportData"
import {yuserData} from "./ReportData"
import CircleChart from '../../Dashbord_layout/circle chart/CircleChart'
import Table from '../../Dashbord_layout/TableLayout'


 



 

const Allusers = () => {
  const [point, setPoint] = useState(null);

  //for table drobdown
  const handlepoint = (selected) => {
    setPoint(selected);
  };

  const columns = [
    "ID",
    "Type Users",
    "Total Number",
    "Total Active Users",
    "Total Not Active Users",
  
    " ",
  ];
  const rows = [
    {
    
      Type_Users :"Service Provides",
      Total_Number:"50.000",
      Total_Active_Users:"49.000",
      Total_Not_Active_Users:"1.000",
          d:""
    },
    {
    
      Type_Users :"Service Provides",
      Total_Number:"50.000",
      Total_Active_Users:"49.000",
      Total_Not_Active_Users:"1.000",
      d:""
    },
   
  ];

  const points = [
    { name: "Go to service provides", type: "viwe" },
    { name: "Export this filed ", type: "viwe" },
  
  ];
  return (
    <>
   


   <CircleChart title="All Users - 100.000"  />
   <Chart data={userData} yuserData={yuserData} title="All Users - 100.000" dec="All users as (supper admin, admin, service provider, patient) and in this website the users is increased. " grid dataKey="Active User" />
   <div className=' w-full   lg:w-[100%] xl:w-[77%] sm:w-[100%]  h-[80%] mt-10 rounded-md relative xl:bottom-48 bg-white '>
   <Table
            columns={columns}
            rows={rows}
            points={points}
            point={point}
            handlepoint={handlepoint}
          />
   </div>
   </>


    
)}

export default Allusers