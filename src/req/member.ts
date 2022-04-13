import axios from "axios";

const client = axios.create({
  baseURL:
    "https://api.kontenbase.com/query/api/v1/26c3c0d4-87a1-44dd-949a-d7b4361af5a7",
});

export const getAllMember = async () => {
  try {
    const res = await client.get(`/members`);
    let arr: any = [];

    res.data.map((item: any) => {
      const data = {
        ...item,
        role: item.role.value,
      };
      arr.push(data);
    });

    return arr;
  } catch (error: any) {
    return {
      status: error.response.status,
      message: error.response.data.message,
    };
  }
};
