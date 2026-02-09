import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Booking from "../components/Booking";

export default function BookingPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <Booking />
            <Footer />
        </main>
    );
}
