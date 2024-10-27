import logo from "../assets/logo.svg"; // Ensure the logo is correctly imported
import { FaLinkedin, FaGithub, FaInstagram, FaSquareXTwitter, FaEnvelope } from "react-icons/fa6"; // Import the email icon

export default function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex items-center'>
        <img src={logo} alt="logo" className='mx-2 w-10' />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
        <a href="https://www.linkedin.com/in/anubhav-shukla-74a842305/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Anubhav-shukla1729" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/kingofkings4368/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://x.com/Anubhav1729Anu" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
        {/* Email Icon */}
        {/* <a href="mailto:anubhavshuklaoffi@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a> */}
      </div>
    </nav>
  );
}