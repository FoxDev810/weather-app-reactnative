import { useQuery } from "react-query";
import { capitalize } from "../utils";

const getCity = async (_: any, search: string) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${capitalize(
      search ? search : "California"
    )}&units=metric&appid=1a91952eda02ed514b41072449874b55`
  );
  return await res.json();
};

const useCity = (search: string) => useQuery(["city", search], getCity);

export default useCity;
