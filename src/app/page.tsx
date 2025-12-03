import NextLink from "next/link";
import { Button, Center, Heading, VStack } from '@chakra-ui/react'


export default function Home() {
  return (
    <Center h="100vh">
      <VStack>
        <Heading>Welcome</Heading>
        <Button asChild>
          <NextLink href="session">Start a new session</NextLink>
        </Button>
      </VStack>
    </Center>
  )
}
