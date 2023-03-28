import React, {useState, useEffect} from 'react'

export default function NonPharmacy() {
    const endpoint = `http://localhost:8000/coaData/1`;
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(endpoint)
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((error) => console.error(error));
    }, []);
    console.log(data["children"][1]["children"][0].name);
  return (
    <div>
        Non Pharmacy
        {data && <p>{data["children"][1]["children"][0].name}</p> }
    </div>
  )
}
