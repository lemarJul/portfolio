import css from "./Landing.module.css";
import { Box } from "@mui/material";
import profileImg from "../../assets/img/profil.png";
import jlIcon from "../../assets/icons/jl-icon.png";
import jl_svg from "../../assets/icons/jl.svg";
import SocialLinks from "../Footer/SocialLinks";
import Header from "../Header";
export default function Landing() {
  return (
    <div id="landing" className={css.section}>
      <div className={css.titleContainer}>
        <h1 className={css.title}>Julien Lemarchand</h1>
        <h2 className={css.subtitle}>Développeur Full-Stack Javascript</h2>
      </div>

      {/* <img src={jl_svg} alt="" className={css.icon} />
      <h2 className={css.subtitle}>Développeur Full-Stack JavaScript</h2>
      <img src={profileImg} alt="profile" className={css.profil_img} />
      <p className={css.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium
        voluptates iste deserunt expedita adipisci animi nam voluptas vitae
        repellat est, quos neque, unde aliquid autem dolore ea at laboriosam?
      </p>
      <div className={css.stack}>STACK</div>
      <div className={css.projects}>CV</div>
      <div className={css.projects}>RDV</div>
      <div className={css.projects}>EXP</div>

      <div className={css.action}></div>
      <div className={css.action}></div>
      <div className={css.action}></div>
      <div className={css.action}></div>
      <div className={css.social_links}>
        <SocialLinks />
      </div>
      <div className={css.mail}></div> */}
    </div>
  );
}
