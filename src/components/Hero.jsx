import { styles } from "../styles";
import {FaInstagramSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';
import {FaEnvelopeSquare} from 'react-icons/fa';
import {FaSalesforce} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[200px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-black`}>
            Hi, I'm <span className='text-[#FF4646]'>Krishna Prasad.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100`}>
            I'm pursuing B.Tech in <br className='sm:block hidden' />
            Vellore Institute of Technology, Chennai.
          </p>
          <br/>
          <div className="inline-flex">
          <a className="text-black" href="https://www.linkedin.com/in/krishna-prasad-9b619a1a8/" target="_blank">
          <FaLinkedin className="h-14 w-14 mx-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110  duration-300 ..." />
        </a>

        <a className="text-black" href="https://github.com/krishnaprasad12" target="_blank">
          <FaGithubSquare className="h-14 w-14 mx-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110  duration-300 ..." />
        </a>

        <a className="text-black" href="mailto:kparjun12@gmail.com" target="_blank">
          <FaEnvelopeSquare className="h-14 w-14 mx-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110  duration-300 ..." />
        </a>
        <a className="text-black" href="https://trailblazer.me/id/krishnaprasad24" target="_blank">
          <FaSalesforce className="h-14 w-14 mx-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110  duration-300 ..." />
        </a>

        <a className="text-black" href="https://www.instagram.com/killerkp21/" target="_blank">
          <FaInstagramSquare className="h-14 w-14 mx-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110  duration-300 ..." />
        </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;