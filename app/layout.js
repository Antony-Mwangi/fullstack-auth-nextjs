import Providers from "./providers";
import ClientLayout from "./components/ClientLayout"; // Import the new component

export const metadata = {
  title: "NotesApp",
  description: "Securely manage your notes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ClientLayout>
            {children}
          </ClientLayout>
        </Providers>
      </body>
    </html>
  );
}