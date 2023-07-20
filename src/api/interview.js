import client from "./client";

export const getInterviewList = async () => {
  try {
    const res = await client.get("interview");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getInterviewDetail = async (id) => {
  try {
    const res = await client.get(`interview/${id}`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
