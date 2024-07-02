import css from "./Landing.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SocialMediaCard from "../SocialMediaCard/SocialMediaCard";

const s = (...cssModules) => cssModules.join(" ");

export default function Landing() {
  return (
    <>
      <div id="landing" className={css.gridSection}>
        <div
          id="title"
          className={[css.gridItem, css.title_container].join(" ")}
          style={{ gridArea: "1/1/span 1/span 9" }}
        >
          <h1 className={css.title}>Julien Lemarchand</h1>
          <h2 className={css.subtitle}>Développeur web</h2>
        </div>
        <div
          title="Profile_img"
          className={[css.gridItem, css.profil_img].join(" ")}
          style={{ gridArea: "1/-4/span 3/span 3" }}
        ></div>
        <div
          id="location"
          className={[css.gridItem, css.location].join(" ")}
          style={{ gridArea: "2/1/ 2/ span 3" }}
        >
          <LocationOnIcon />
          <h3>Lille</h3>
        </div>
        <div
          id="alternance"
          className={css.gridItem}
          style={{ gridArea: "3/1/ 3/ span 3" }}
        ></div>

        <SocialMediaCard
          className={css.gridItem}
          style={{ gridArea: "2/4/span 2/span 6" }}
        />

        <div
          id="projects"
          className={css.gridItem}
          style={{ gridArea: "4/span 3/span 2" }}
        ></div>
        <div
          id="stack"
          className={css.gridItem}
          style={{ gridArea: "4/span 3/span 2" }}
        ></div>
        <div
          className={css.gridItem}
          style={{ gridArea: "4/span 3/span 2" }}
        ></div>
        <div
          className={css.gridItem}
          style={{ gridArea: "4/span 1", aspectRatio: "1/1" }}
        ></div>
        <div className={css.gridItem} style={{ gridArea: "4/span 1" }}></div>
        <div className={css.gridItem} style={{ gridArea: "4/span 1" }}></div>
        <div className={css.gridItem} style={{ gridArea: "5/span 1" }}></div>
        <div className={css.gridItem} style={{ gridArea: "5/span 1" }}></div>
        <div className={css.gridItem} style={{ gridArea: "5/span 1" }}></div>
      </div>

      {/* display Flex */}
      {/* <div id="landing" className={css.flexSection}>
        <div className={css.flexCol} style={{ flex: 3 }}>
          <div className={css.flexRow} style={{ flex: 2 }}></div>
          <div className={css.flexRow} style={{ flex: 3 }}>
            <div className={css.flexCol} style={{ flex: 1 }}>
              <div
                className={s(css.bento, css.flexRow)}
                style={{ flex: 1 }}
              ></div>
              <div
                className={s(css.bento, css.flexRow)}
                style={{ flex: 1 }}
              ></div>
            </div>
            <div
              className={s(css.bento, css.flexCol)}
              style={{ flex: 2 }}
            ></div>
          </div>
          <div className={css.flexRow} style={{ flex: 2 }}>
            <div
              className={s(css.flexCol, css.bento)}
              style={{ flex: 1 }}
            ></div>
            <div
              className={s(css.flexCol, css.bento)}
              style={{ flex: 1 }}
            ></div>
            <div
              className={s(css.flexCol, css.bento)}
              style={{ flex: 1 }}
            ></div>
          </div>
        </div>
        <div className={css.flexCol} style={{ flex: 1 }}>
          <div className={s(css.bento, css.flexRow)} style={{ flex: 4 }}></div>
          <div className={s(css.bento, css.flexRow)} style={{ flex: 2 }}></div>
        </div>
      </div> */}
    </>
  );
}
