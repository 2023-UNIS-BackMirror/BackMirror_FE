import client from "./client";

export const getInterviewList = async () => {
  try {
    const res = await client.get("famous");

    return res.data.famousFailBriefInfoVos;
  } catch (error) {
    console.log(error);
  }
};

export const getInterviewDetail = async (id) => {
  try {
    const res = await client.get(`famous/${id}`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
