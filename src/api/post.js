import client from "./client";

export const PostFailure = async (type, arr) => {
  console.log(type, arr);
  try {
    const res = await client.post("post", {
      type: type,
      answerList: arr,
    });

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const Get = async (type) => {
  try {
    const res = await client.get(`post/type/${type}`);

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
