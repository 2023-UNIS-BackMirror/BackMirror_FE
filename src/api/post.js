import client from "./client";

export const PostFailure = async (type, arr) => {
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

export const GetMyFails = async () => {
  try {
    const res = await client.get("post");

    return res.data.postList;
  } catch (error) {
    console.log(error);
  }
};
export const GetMyFailDetail = async (postId) => {
  try {
    const res = await client.get(`post/${postId}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
