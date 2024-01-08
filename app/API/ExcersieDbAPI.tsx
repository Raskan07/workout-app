import axios from "axios";

const API_KEY = "2fe4791201msh6d90e69adadba02p1bb428jsn1daf2b09bb21";
const BASE_URL = "https://exercisedb.p.rapidapi.com";

const apiCall = async (bodyPart:any) => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/exercises/bodyPart/${bodyPart}`,
    params: { limit: '35' },
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data; // Return the response data
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

export const fetchData = async (bodypart:any) => {
  try {
    let data = await apiCall(bodypart);
    return data;
  } catch (error) {
    // Handle the error, log it, or return a default value
    console.error("Error fetching data:", error);
    return null; // or return a default value or handle it as needed
  }
};
