import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '8de793a6edmsh4f3f7c7598413bep15da65jsnd479f422b813',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  });

  return data;
}