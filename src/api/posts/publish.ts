import http from "..";

export interface RequestProps {
  image: string;
  userName: string;
  description: string;
}

const publish = async (data: RequestProps) => {
  const response = await http.post("posts", data);

  return response;
};

export default publish;
