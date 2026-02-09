import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <About />
            <Footer />
        </main>
    );
}
