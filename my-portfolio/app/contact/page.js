import Link from "next/link";
import { FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



export default function Contact() {
  return (
    <main>
      <h1 className="my-8 text-2xl">Contact Me</h1>
       
      <div className="space-y-4">
        <Link className="text-xl flex gap-2 hover:text-orange-500 duration-300" href="tel:+125986589983">
          <FaPhone />
          <span className="text-base">Phone call</span>
        </Link>

        <Link className="text-xl flex gap-2 hover:text-orange-500 duration-300" href="mailto:yohannesjho12@gmail.com">
          <MdEmail />
          <span className="text-base">Email</span>
        </Link>

        <Link className="text-xl flex gap-2 hover:text-orange-500 duration-300" href="https://www.linkedin.com/in/yohannes-fikre-104703234/">
          <FaLinkedin />
          <span className="text-base">Linkedin</span>
        </Link>

        <Link className="text-xl flex gap-2 hover:text-orange-500 duration-300" href="https://www.instagram.com/johnianso/">
          <FaInstagram />
          <span className="text-base">Instagram</span>
        </Link>

      </div>
    </main>
  );
}
