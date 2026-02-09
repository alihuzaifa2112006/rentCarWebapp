import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";

export default function ProcessPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <HowItWorks />
            <Footer />
        </main>
    );
}
