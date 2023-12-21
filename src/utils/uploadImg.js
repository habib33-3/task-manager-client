import axios from "axios";

export const uploadImg = async (img) => {
  try {
    const formData = new FormData();
    formData.append("image", img);

    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      formData
    );

    return data;
  } catch (error) {
    throw new Error("Error uploading image:", error.message);
  }
};
