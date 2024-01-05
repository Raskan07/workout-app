import axios from "axios";
import { useEffect } from "react";




const ApiCall = async ({age,weight,height}:any) => {
    const options = {
        method: 'GET',
        url: 'https://fitness-calculator.p.rapidapi.com/bmi',
        params: {
          age: age,
          weight: weight,
          height: height
        },
        headers: {
          'X-RapidAPI-Key': '2fe4791201msh6d90e69adadba02p1bb428jsn1daf2b09bb21',
          'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        return response.data ;
      } catch (error) {
        console.log(error)
      }
      
}

export const FetchData = async ({age,weight,height}:any) => {
  try {
    const data = await ApiCall({age,weight,height})
    return data ; 
  } catch (error) {
    console.log(error)
  }
}

