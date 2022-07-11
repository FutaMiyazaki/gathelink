import { LayoutErrorBoundary } from "@/layouts/LayoutErrorBoundary";
import { Center, Container } from "@mantine/core";
import type { CustomLayout } from "next";

export const AuthLayout: CustomLayout = (page) => {
  return (
    <Center
      sx={(theme) => ({
        minHeight: "100vh",
        backgroundColor: theme.colors.gray[0],
      })}
    >
      <Container size='xs' sx={{ width: 480, paddingBottom: 16 }}>
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </Container>
    </Center>
  );
};
