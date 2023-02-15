import http from "..";

const remove = async (id: number) => {
  const response = await http.delete(`posts/${id}`);

  return response;
};

export default remove;
