import axios from "axios";
import { processColor } from "react-native";

const instance  = axios.create({
    baseURL: processColor.env.API
})