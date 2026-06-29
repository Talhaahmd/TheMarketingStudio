import { Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import About1Page from "@/pages/About1Page";
import Contact1Page from "@/pages/Contact1Page";
import FaqsPage from "@/pages/FaqsPage";
import Home11Page from "@/pages/Home11Page";
import Portfolio1Page from "@/pages/Portfolio1Page";
import PortfolioDetails1Page from "@/pages/PortfolioDetails1Page";
import PricingPage from "@/pages/PricingPage";
import Services1Page from "@/pages/Services1Page";
import ServicesDetailsPage from "@/pages/ServicesDetailsPage";
import TeamPage from "@/pages/TeamPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout headerStyle={11} footerStyle={11} />}>
        <Route path="/" element={<Home11Page />} />
        <Route path="/about" element={<About1Page />} />
        <Route path="/services" element={<Services1Page />} />
        <Route path="/services-details" element={<ServicesDetailsPage />} />
        <Route path="/portfolio" element={<Portfolio1Page />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetails1Page />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="/contact" element={<Contact1Page />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
