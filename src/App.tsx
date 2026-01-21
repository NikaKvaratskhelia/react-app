import Footer from "./layout/Footer";
import Header from "./layout/Header";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <MainPage/>
      <Footer />
    </div>
  );
}
