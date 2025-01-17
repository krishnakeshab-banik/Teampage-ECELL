import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TeamSection from "./components/TeamSection";
import "./index.css";

function App() {
    return (
        <div className="app">
            <Header />
            <TeamSection />
            <Footer />
        </div>
    );
}

export default App;