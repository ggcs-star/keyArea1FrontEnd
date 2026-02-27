import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./container/Navbar";
import Navbar from "./container/Navbar/index";
// import Routes from "./routes";
import Footer from "./container/Footer/index";
import ReelVideos from './routes/OtherRoutes/Reels/ReelVideos'
import MainRoutes from "./routes/MainRoutes";

// ScrollToTop component
function ScrollToTop() {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

const MainApp = (props) => {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Routes>
                    {/* Route with Navbar and Footer */}
                    <Route
                        path="/*"
                        element={
                            <div className="relative min-h-[100vh] flex flex-col">
                                <div>
                                    <Navbar {...props} />
                                </div>
                                <div className="flex-1">
                                    <MainRoutes {...props} />
                                </div>
                                <Footer />
                            </div>
                        }
                    />
                    {/* Route without Navbar and Footer */}
                    <Route
                        path="/reels"
                        element={<ReelVideos {...props} />}
                    />
                    <Route
                        path="/reels/:linkId"
                        element={<ReelVideos {...props} />}
                    />

                </Routes>
            </Router>

        </>
    );
};
export default MainApp;
