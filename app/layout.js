import "./globals.css";

export const metadata = {
  title: "Employee Management System",
  description: "Manage your employees easily with CRUD operations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
