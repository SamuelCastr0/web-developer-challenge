import { extendTheme } from "@chakra-ui/react";
import * as colors from "./colors";
import { Button, Input, Textarea } from "./components";

const theme = extendTheme({
  colors: { ...colors },
  components: {
    Button,
    Input,
    Textarea,
  },
});

export default theme;
