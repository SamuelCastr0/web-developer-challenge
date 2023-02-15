import { Flex, Image } from "@chakra-ui/react";

function Header() {
  return (
    <Flex
      align="center"
      justify="center"
      width="full"
      height="5.8rem"
      backgroundColor="gray.800"
      borderBottom="1px solid #232323"
    >
      <Image src="/logo.png" width="6.4rem" height="2.8rem" />
    </Flex>
  );
}

export default Header;
