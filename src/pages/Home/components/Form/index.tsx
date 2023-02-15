import { Flex, InputGroup, Input, Textarea, ButtonGroup, Button, Image, Box, useToast, Alert, AlertIcon } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { mutate } from "swr";
import publish from "~/api/posts/publish";
import { ImagePreview, SWRKeys } from "../";

export interface FormProps {
  image: FileList;
  userName: string;
  description: string;
}

function SuccessMessage() {
  return (
    <Box color="white" p={3} background="blue.500">
      Hello World
    </Box>
  );
}

function Form() {
  const toast = useToast();
  const { register, handleSubmit, formState, reset, watch } = useForm<FormProps>();
  const image = watch("image");
  const imageBlob = image?.length ? URL.createObjectURL(image[0]) : null;

  const handleFileInput = () => (document.querySelector("#hidden-input") as HTMLInputElement).click();

  const onSubmit: SubmitHandler<FormProps> = async ({ userName, description }) => {
    const { status } = await publish({ userName, description, image: imageBlob as string });
    if (status === 201) {
      mutate(SWRKeys.POSTS);
      toast({
        title: "Conteúdo Publicado!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      reset();
    }
  };

  return (
    <Flex
      as="form"
      flexDirection="column"
      gap="14"
      onSubmit={handleSubmit(onSubmit)}
      background="gray.550"
      border="1px solid"
      borderColor="gray.600"
      borderRadius="3px"
      padding="8"
      width="full"
      maxWidth="32.25rem"
    >
      <InputGroup flexDirection="column" gap="2">
        {imageBlob ? (
          <Box alignSelf="center" marginBottom="2" onClick={handleFileInput} cursor="pointer">
            <ImagePreview src={imageBlob} />
          </Box>
        ) : (
          <Flex
            onClick={handleFileInput}
            border="solid 1px"
            borderColor="gray.600"
            borderRadius="2.25rem"
            width="5.5rem"
            height="5.5rem"
            justify="center"
            align="center"
            alignSelf="center"
            marginBottom="2"
            cursor="pointer"
          >
            <Image height="8" src="/preview.png" />
          </Flex>
        )}
        <Input {...register("image", { required: true })} id="hidden-input" type="file" accept="image/*" display="none" />
        <Input {...register("userName", { required: true })} placeholder="Digite seu nome" />
        <Textarea {...register("description", { required: true })} placeholder="Mensagem" height="20" resize="none" />
      </InputGroup>
      <ButtonGroup alignSelf="flex-end">
        <Button onClick={() => reset()} variant="secondary">
          Descartar
        </Button>
        <Button type="submit" variant="primary" isDisabled={!formState.isValid}>
          Publicar
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default Form;
