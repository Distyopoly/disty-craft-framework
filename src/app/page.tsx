import NextLink from "next/link";
import { Button, Link as ChakraLink, Heading, VStack } from '@chakra-ui/react'


export default function Home() {
  return (
    <VStack>
      <Heading>Welcome</Heading>
      <Button asChild>
        <NextLink href="session">Start a new session</NextLink>
      </Button>
    </VStack>
  )
}
