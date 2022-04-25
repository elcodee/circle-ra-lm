import axios from "axios";

const client = axios.create({
  baseURL:
    "https://api.kontenbase.com/query/api/v1/26c3c0d4-87a1-44dd-949a-d7b4361af5a7",
});

export const getAllThrEvent = async () => {
  try {
    const res = await client.get(`/thr?$sort[hadiah]=-1`);

    return res.data;
  } catch (error: any) {
    return {
      status: error.response.status,
      message: error.response.data.message,
    };
  }
};
