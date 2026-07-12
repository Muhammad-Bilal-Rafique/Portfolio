import Navbar  from "@/components/business/Navbar";
import Footer  from "@/components/business/Footer";

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{
    <div>
      <Navbar/>
    {children}
    <Footer/>
    </div>

  
  }</>;
}