import type { CustomNextPage } from "next";
import { Group, Stack } from "@mantine/core";
import { MainLayout } from "@/layouts/MainLayout";

const Settings: CustomNextPage = () => {
  return (
    <Stack spacing='xl'>
      <Group grow></Group>
    </Stack>
  );
};

Settings.getLayout = MainLayout;

export default Settings;
