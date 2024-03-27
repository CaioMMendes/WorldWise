import { useEffect, useState } from "react";
import fetchFunction from "../fetch/fetch-function";

type cityType = {
  id: string;
  cityName: string;
  country: string;
  emoji: string;
  date: Date;
  notes: string;
  lat: string;
  lng: string;
};

type GetCitiesResponseType = {
  data: undefined | cityType[];
  message: string;
  status: "success" | "error";
};

const CitiesPage = () => {
  const [cities, setCities] = useState<cityType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  console.log(isLoading);
  useEffect(() => {
    const abortController = new AbortController();
    fetch();
    async function fetch() {
      setIsLoading(true);
      try {
        const { data, message }: GetCitiesResponseType = await fetchFunction({
          url: "cities",
          signal: abortController.signal,
        });
        console.log(message);
        setCities(data ? data : []);
        setIsLoading(false);
      } catch (error) {
        const customError = error as Error;
        if (customError?.name !== "CanceledError") {
          setIsError(true);
          setIsLoading(false);
        }
        console.log(error);
      }
    }

    return () => abortController.abort();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Ocorreu um erro ao tentar realizar a requisição</p>;
  }

  return (
    <div>
      {cities.map((city: cityType) => {
        return <p key={city.id}>{city.cityName}</p>;
      })}
    </div>
  );
};

export default CitiesPage;
