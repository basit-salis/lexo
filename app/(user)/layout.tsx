import { FloatingNavbar, UserNavbar } from "@components";

export const metadata = {
  title: "Lexo Bank User Dashboard",
  description: "lexo bank user dashboard",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative ">
        <main className="w-screen min-h-screen relative text-white bg-gradient-to-br from-blue-900 from-20% to-blue-800 to-80% padding-x pb-14 box-border">
          <UserNavbar />
          {children}
          <FloatingNavbar />
        </main>
      </div>
    </>
  );
}
