import { Box, VStack } from "@chakra-ui/react";
import { Header, Form, Feed } from "./components";

function Home() {
  return (
    <Box backgroundColor="gray.650" minHeight="100vh" paddingBottom="10">
      <Header />
      <VStack marginY="10" marginX="8" gap="14">
        <Form />
        <Feed />
      </VStack>
    </Box>
  );
}

export default Home;
