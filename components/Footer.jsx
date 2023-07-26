import {
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <Stack direction="column" m={5}>
    <Stack
      spacing="8"
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      py={{
        base: "12",
        md: "16",
      }}
      px={5}>
      <Stack
        spacing={{
          base: "6",
          md: "8",
        }}
        align="start">
        <Text
          fontWeight="bold"
          fontSize="2xl"
          color="purple.400"
          textTransform="uppercase">
          Paddy Construction
        </Text>
        <Text color="gray.500">Create beautiful websites remarkably fast.</Text>
      </Stack>
      <Stack
        direction={{
          base: "column-reverse",
          md: "column",
          lg: "row",
        }}
        spacing={{
          base: "12",
          md: "8",
        }}>
        <Stack direction="row" spacing="8">
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Product
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">How it works</Button>
              <Button variant="link">Pricing</Button>
              <Button variant="link">Use Cases</Button>
            </Stack>
          </Stack>
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Legal
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">How it works</Button>
              <Button variant="link">Pricing</Button>
              <Button variant="link">Use Cases</Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack spacing="4">
          <Text fontSize="lg" fontWeight="bold" color="purple.400">
            Stay up to date
          </Text>
          <Stack
            spacing="4"
            direction={"column"}
            maxW={{
              lg: "360px",
            }}>
            <Input placeholder="Enter your email" type="email" required />
            <Button
              variant="solid"
              colorScheme="purple"
              type="submit"
              flexShrink={0}>
              Subscribe
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    <Divider color="purple.400" />
    <Stack
      pt="4"
      pb="4"
      justify="space-between"
      direction={{
        base: "column-reverse",
        md: "row",
      }}
      align="center"
      color="purple.500">
      <Text fontSize="lg" fontWeight="bold">
        &copy; {new Date().getFullYear()} Paddy Construction, Inc. All rights reserved.
      </Text>
      <ButtonGroup variant="ghost">
        <IconButton
          as="a"
          href="#"
          aria-label="LinkedIn"
          icon={<FaLinkedin fontSize="2rem" />}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="GitHub"
          icon={<FaGithub fontSize="2rem" />}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="Twitter"
          icon={<FaTwitter fontSize="2rem" />}
        />
      </ButtonGroup>
    </Stack>
  </Stack>
);
export default Footer;
