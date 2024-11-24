import { Sidebar } from "@/components/shared";

export default function HomeLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <main>
      <Sidebar />
      {children}
    </main>
  );
}
