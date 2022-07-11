import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@mantine/core";
import type { CustomNextPage } from "next";

const Index: CustomNextPage = () => {
  return <Button>通知を表示</Button>;
};

Index.getLayout = MainLayout;

export default Index;
