import NavBar from "./components/NavBar";
import Aside from "./components/Aside";

export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <html lang="en">
            <body>
                <div>
                    <NavBar/>
                    <div className="flex">  
                      <Aside/>             
                      {children}
                    </div>
                </div>
            </body>
        </html>
    );
  }