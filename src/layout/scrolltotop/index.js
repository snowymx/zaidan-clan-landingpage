import React, { useEffect, useState } from "react";

const ScrollToTop = () => {

    const [scrollToTop, setScrollToTop] = useState("none");

    const handleScroll = () => {
        if (window.scrollY > 500) {
            setScrollToTop("block");
        } else {
            setScrollToTop("none");
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className="scroll-to-top" style={{ display: scrollToTop, fontSize: '18px' }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            to top
        </div>
    );
};

export default ScrollToTop;