//DotENV
import dotenv from "dotenv";

/* ENV Initialization */
dotenv.config();

/* Env Variables */
const URL = process.env.ADULT_API_URL;

/* Girl Requests */
async function getAllGirls() {
  const response = await fetch(`${URL}/api/girls`);
  const data = await response.json();
  return data;
}

/* Guy Requests */
async function getAllGuys() {
  const response = await fetch(`${URL}/api/guys`);
  const data = await response.json();
  return data;
}

/* Scene Requests */
async function getAllScenes() {
  const response = await fetch(`${URL}/api/scenes`);
  const data = await response.json();
  return data;
}

export { getAllGirls, getAllGuys, getAllScenes };
