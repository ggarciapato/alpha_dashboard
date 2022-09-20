import { useState, useEffect } from "react";

const test_url = 'https://sheet.best/api/sheets/9032501a-ba85-493b-948c-75a5129ea569/tabs/TEST'

const FetchData = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await fetch(test_url);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div>{JSON.stringify(data)}</div>
  );
}

export default FetchData;
