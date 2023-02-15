import http from "..";

export interface PostProps {
  id: number;
  image: string;
  userName: string;
  description: string;
}

const retrieve = async () => {
  const { data } = await http.get<Array<PostProps>>("posts");

  return data;
};

export default retrieve;
