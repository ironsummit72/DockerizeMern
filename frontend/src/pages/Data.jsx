import Card from "@/components/Card";
import axios from "axios";
import { useEffect, useState } from "react";



function Data() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('/api/users')
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="flex justify-center items-center w-full h-screen flex-col gap-10">
        {data?.map(datas=>{
      return <Card key={datas._id} username={datas.username} firstName={datas.firstName} lastName={datas.lastName} />
          
        })}
    </div>
  );
}

export default Data;
