import client from "./client";

export const GetQuestion = async (type) => {
  try {
    const res = await client.get(`question/${type}`);

    return res.data.questionList;
  } catch (error) {
    console.log(error);
  }
};
