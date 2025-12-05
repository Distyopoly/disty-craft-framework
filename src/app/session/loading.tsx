import { Center, Spinner } from "@chakra-ui/react";

export default function Loading() {
  // Or a custom loading skeleton component
  return <Center h="100vh">
      <Spinner/>
  </Center>
}