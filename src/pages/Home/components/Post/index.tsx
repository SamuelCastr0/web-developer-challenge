import { mutate } from "swr";
import remove from "~/api/posts/remove";

import { Box, Flex, VStack } from "@chakra-ui/react";
import { PostProps as ApiPostProps } from "~/api/posts/retrieve";
import { ImagePreview, SWRKeys } from "../";

export interface PostProps {
  post: ApiPostProps;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const handleDelete = async () => {
    await remove(post.id);
    mutate(SWRKeys.POSTS);
  };

  return (
    <>
      <VStack
        background="gray.550"
        border="1px solid"
        borderColor="gray.600"
        borderRadius="3px"
        padding="8"
        paddingTop="14"
        width="full"
        position="relative"
        align="start"
      >
        {/* problem importing icons with classes */}
        <Box
          as="button"
          position="absolute"
          top="12px"
          right="12px"
          alignSelf="end"
          color="#d65923"
          fontSize=".75rem"
          border="1px solid #d65923"
          borderRadius="50%"
          height="20px"
          width="20px"
          onClick={handleDelete}
        >
          x
        </Box>
        <Flex gap="8">
          <ImagePreview src={post.image} />
          <VStack color="gray.300" gap="6">
            <Box as="p" fontSize="1rem">
              {post.description}
            </Box>
            <VStack alignSelf="start" alignItems="start" gap="2" lineHeight="0">
              <Box as="span" fontSize="0.75rem" color="gray.450">
                Enviado por
              </Box>
              <Box as="span" fontSize="0.875rem">
                {post.userName}
              </Box>
            </VStack>
          </VStack>
        </Flex>
      </VStack>
    </>
  );
};

export default Post;
