import type { NextPage } from "next";
import NextLink from "next/link";
import Head from "next/head";
import { Flex, Link, Box } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";

const Home: NextPage = () => {
  return (
    <Flex direction="column" align="center" justify="center" py="3" h="100vh">
      <Head>
        <title>ZeMovieQuiz App</title>
        <meta name="description" content="ZeMovieQuiz app fullstack test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        align="center"
        justify="center"
        w="full"
        h="24"
        flexDirection={"column"}
        className="border-t"
      >
        <Box>This is production site for gwislab </Box>

        <NextLink
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          passHref
        >
          <Link rel="noopener noreferrer" isExternal>
            <Flex align="center" justify="center">
              <Box>Powered by Gwislab </Box>
            </Flex>
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Home);
