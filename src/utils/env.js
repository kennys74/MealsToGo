import { Platform } from "react-native";

const liveHost = "https://us-central1-mealstogo-9e7b8.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstogo-9e7b8/us-central1";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = true;
//export const host = !isDevelopment || isAndroid ? liveHost : localHost;
export const host = liveHost;
