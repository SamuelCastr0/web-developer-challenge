import { Theme, theme } from "@chakra-ui/react";
import { SystemStyleFunction } from "@chakra-ui/theme-tools";

const Button = {
  variants: {
    primary: {
      border: "1px solid gray.600",
      borderRadius: "8px",
      padding: "12px 24px",
      background: "#71bb00",
      fontWeight: "normal",
      color: "gray.550",
      _disabled: {
        background: "gray.450!important",
        cursor: "not-allowed",
      },
    },
    secondary: {
      background: "transparent",
      fontWeight: "normal",
      color: "gray.450",
      padding: "12px 24px",
      textDecoration: "underline",
    },
  } as unknown as {
    [key: string]: SystemStyleFunction;
  } & typeof theme.components.Button.variants,
};

const Input = {
  variants: {
    outline: {
      field: {
        // outline: "0 !important",
        border: "none!important",
        color: "gray.300",
        borderRadius: "8px",
        backgroundColor: "gray.500!important",
        height: "12",
        _focus: {
          borderColor: `gray.300`,
        },
        _placeholder: {
          color: "gray.300",
        },
      },
    },
  },
  defaultProps: {
    variant: "outline",
  },
} as unknown as Theme["components"]["Input"];

const Textarea = {
  variants: {
    outline: {
      border: "none!important",
      color: "gray.300",
      borderRadius: "8px",
      backgroundColor: "gray.500!important",
      _focus: {
        borderColor: `gray.300`,
      },
      _placeholder: {
        color: "gray.300",
      },
    },
  },
  defaultProps: {
    variant: "outline",
  },
} as unknown as Theme["components"]["Textarea"];

export { Input, Button, Textarea };
