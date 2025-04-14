import { ThemeProvider } from "@/components/theme-provider";
import Page from "./dashboard/page";

export default function Home() {
  return (
    <div>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Page />
      </ThemeProvider>
    </div>
  );
}
