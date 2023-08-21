import '../App.css';
function Footer() {
    return (
        <div id="footer" className="footer-form">
            <div style={{position: "absolute", top: 6, left: 30}}>
            </div>
            <div style={{position: "absolute", top: 6, left: 100}}>
            </div>
            <div style={{display: "inline-block", float: "right", marginRight: 28, marginTop: 18}}>
                <span className="footer-font-small">Copyright © {new Date().getFullYear()} University of Washington | All rights reserved. </span>
            </div>
        </div>            
        );
}
export default Footer;