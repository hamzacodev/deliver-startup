import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import EmailVerification from "./pages/EmailVerification";
import PhoneVerification from "./pages/PhoneVerification";
import GetStarted from "./pages/GetStarted";
import GigListing from "./pages/GigListing";
import OnGoingOrders from "./pages/OnGoingOrders";
import ResetPassword from "./pages/ResetPassword";
import MyGigs from "./pages/MyGigs";
import GigCompleted from "./pages/GigCompleted";
import GigDetail from "./pages/GigDetail";
import NewGig from "./pages/NewGig";
import GiveRating from "./pages/GiveRating";
import Chat from "./pages/Chat";
import ForgotPassword from "./pages/ForgotPassword";
import Navbar from "./shared-component/Navbar";

function AppConfige() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/phone-verification" element={<PhoneVerification />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/new-gig" element={<NewGig />} />
          <Route path="/gig-listing" element={<GigListing />} />
          <Route path="/on-going-orders" element={<OnGoingOrders />} />
          <Route path="/my-gigs" element={<MyGigs />} />
          <Route path="/gig-detail" element={<GigDetail />} />
          <Route path="/gig-completed" element={<GigCompleted />} />
          <Route path="/give-rating" element={<GiveRating />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppConfige;
