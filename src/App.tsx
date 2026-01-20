import Footer from "./layout/Footer";
import Header from "./layout/Header";

export default function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <Footer />
    </div>
  );
}
