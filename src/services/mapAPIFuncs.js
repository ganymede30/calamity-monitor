import axios from "axios"
import { selectCoordinates } from "../utils/utils"



export const url = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations'

export const getMapData = async () => {
  const {data} = await axios
    .get(url)
    const result = data.locations.map(location =>  selectCoordinates(location))

    //.then(({ data }) => data.locations.map(location =>  selectCoordinates(location)))


    // console.log("Is the result of getMapData an Array?", Array.isArray(result))
    // console.log("Result", result)
  return result
}


