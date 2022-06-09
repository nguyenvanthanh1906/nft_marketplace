import "../styles/css/bootstrap.min.css";
import "../styles/css/bootstrap-grid.min.css";
import "../styles/css/bootstrap-reboot.min.css";
import "../styles/css/animate.css";
import "../styles/css/owl.carousel.css";
import "../styles/css/owl.theme.css";
import "../styles/css/owl.transitions.css";
import "../styles/css/magnific-popup.css";
import "../styles/css/jquery.countdown.css";
import "../styles/css/style.css";
import "../styles/css/coloring.css";
import "../styles/css/colors/scheme-01.css";
import React from "react";
import { Web3Provider } from "@providers";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Web3Provider>
        <Component {...pageProps} />
      </Web3Provider>
      <script src="../js/jquery.min.js"></script>
      <script src="../js/bootstrap.min.js"></script>
      <script src="../js/bootstrap.bundle.min.js"></script>
      <script src="../js/wow.min.js"></script>
      <script src="../js/jquery.isotope.min.js"></script>
      <script src="../js/easing.js"></script>
      <script src="../js/owl.carousel.js"></script>
      <script src="../js/validation.js"></script>
      <script src="../js/jquery.magnific-popup.min.js"></script>
      <script src="../js/enquire.min.js"></script>
      <script src="../js/jquery.plugin.js"></script>
      <script src="../js/jquery.countTo.js"></script>
      <script src="../js/jquery.countdown.js"></script>
      <script src="../js/jquery.lazy.min.js"></script>
      <script src="../js/jquery.lazy.plugins.min.js"></script>
      <script src="../js/designesia.js"></script>
    </>
  );
}

export default MyApp;
