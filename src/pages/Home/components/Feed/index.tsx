import { Box, VStack } from "@chakra-ui/react";
import useSWR from "swr";
import retrieve from "~/api/posts/retrieve";
import { Post } from "../";

export enum SWRKeys {
  POSTS = "/posts/",
}

function Feed() {
  const { data: posts } = useSWR(SWRKeys.POSTS, retrieve);

  return (
    <Box width="full" maxWidth="32.25rem">
      <Box color="gray.300" marginBottom="2">
        Feed
      </Box>
      <VStack gap="4" width="full">
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </VStack>
    </Box>
  );
}

export default Feed;
