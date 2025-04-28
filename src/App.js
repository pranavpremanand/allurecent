import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingHeader from "./components/landingPages/LandingHeader";
import LandingFooter from "./components/landingPages/LandingFooter";
import WebsiteHeader from "./components/website/WebsiteHeader";
import WebsiteFooter from "./components/website/WebsiteFooter";
import { routes } from "./constant";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "./components/common/LoadingSpinner";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/SpinnerContext";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/common/ScrollToTop";
// import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const LandingPage = lazy(() => import("./pages/landingPages/LandingPage"));
const Thankyou = lazy(() => import("./pages/Thankyou"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

AOS.init({
  once: true,
  duration: 500,
});

export default function App() {
  return (
    <SpinnerContextProvider>
      <LoadingSpinnerContext />
      <Suspense fallback={<LoadingSpinner />}>
        <Toaster />
        <ScrollToTop />
        {/* <TawkMessengerReact
          propertyId="67606db7af5bfec1dbdcff03"
          widgetId="1if8ap5rc"
        /> */}
        <Routes>
          {/* Website Pages */}
          {routes.map(({ component, name, path }, index) => (
            <Route
              path={path}
              element={
                <>
                  <WebsiteHeader />
                  {component}
                  <WebsiteFooter />
                </>
              }
            />
          ))}

          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Landing Pages */}
          <Route
            path="/web-development"
            element={
              <>
                <LandingHeader page={"web"} />
                <LandingPage page={"web"} />
                <LandingFooter />
              </>
            }
          />
          <Route
            path="/app-development"
            element={
              <>
                <LandingHeader page={"app"} />
                <LandingPage page={"app"} />
                <LandingFooter />
              </>
            }
          />
        </Routes>
      </Suspense>
    </SpinnerContextProvider>
  );
}
