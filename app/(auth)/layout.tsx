
import { NavBar } from "@components";

export const metadata = {
  title: "Lexo Bank Signin",
  description: "lexo signin into your account",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="relative ">
        <NavBar />
        {children}
      </main>
    </>
  );
}
