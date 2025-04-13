import Image from "next/image";
import Page from "./dashboard/page";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  return (
    <div>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Page />
      </ThemeProvider>
    </div>
  );
}
