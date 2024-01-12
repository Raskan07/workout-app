import axios from "axios";

const foodAPI_Contains = {
    tableNames : "tablenames",
    subTableNames:"subtablenames",
    food:"food"
}
const BASE_URL = `https://fitness-calculator.p.rapidapi.com/foodids/${foodAPI_Contains.subTableNames}`

const tables = [
      "SR25",
      "Su28",
      "SR9",
      "SR8",
      "SR20",
      "SR6",
      "SR24",
      "SR14",
      "SR17",
      "SR5",
      "Su17",
      "SR38",
      "Su35",
      "SR21",
      "Su21",
      "SR22",
      "Su1",
      "SR35",
      "SR34",
      "Su16",
      "Su2",
      "Su14",
      "SR28",
      "Su15",
      "SR39",
      "Su29",
      "SR19",
      "Su6",
      "Su12",
      "SR4",
      "Fo1",
      "SR11",
      "Su36",
      "SR33",
      "SR26",
      "SR3",
      "SR12",
      "SR29",
      "Su13",
      "Su8",
      "Su3",
      "SR18",
      "SR2",
      "Su19",
      "Su27",
      "Su33",
      "Su20",
      "SR15",
      "Su7",
      "Su32",
      "Su22",
      "Su9",
      "Su34",
      "SR1",
      "Su18",
      "Su5",
      "Su31",
      "SR16",
      "Su25",
      "Su24",
      "Su30",
      "SR10",
      "Su26",
      "SR37",
      "Su23",
      "SR13",
      "SR36",
      "SR23",
      "SR7",
      "SR27",
      "Su4",
      "Su10",
      "Su11",
      "SR31",
      "SR30",
      "SR32"
    ]
  
// console.log(tables.length)

 const CallNutrionsAPI = async (num:any,subTable:any) => {
    const options = {
        method: 'GET',
        url: BASE_URL,
        params: {subtablename:subTable,tablename:tables[num]},
        headers: {
          'X-RapidAPI-Key': '2fe4791201msh6d90e69adadba02p1bb428jsn1daf2b09bb21',
          'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          return  response.data;
        //   console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}



 const GetFoodInfo =  async (param:any) => {
    const options = {
        method: 'GET',
        url: 'https://fitness-calculator.p.rapidapi.com/food',
        params: {foodid: `${param}_1`},
        headers: {
          'X-RapidAPI-Key': '2fe4791201msh6d90e69adadba02p1bb428jsn1daf2b09bb21',
          'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
      };
    try {

        const response = await axios.request(options);
        return response?.data ;
        
    } catch (error) {
        console.log(error)
    }
}


export const GetFoodData = async (param:any) => {
    try {
        const data = await GetFoodInfo(param)
        return data ;
        
    } catch (error) {
        console.log(error)
        throw(error)
    }
}

export const fetchNutrionsData = async (num:any,subTable:any) => {
    try {
        const  data = await  CallNutrionsAPI(num,subTable)
        return data ;    
    } catch (error) {
        console.log(error)
    }

}