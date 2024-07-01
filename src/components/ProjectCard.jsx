import styles from "./Project.module.css";

export default function ProjectCard({
  img,
  title,
  children,
  stack1_svg,
  stack2_svg,
  href_repo,
  href_demo,
  contentBackgroundColor,
  ...props
}) {
  return (
    <div className={styles.box} {...props}>
      <h2 className={styles.box__title}>{title}</h2>
      <img className={styles.box__img} src={img} alt="" />

      <p
        className={styles.box__description}
        style={{ backgroundColor: contentBackgroundColor }}
      >
        {" "}
        {children}
      </p>

      <span className={styles.box__stackItem}>
        {stack1_svg && (
          <img className={styles.box__stackItem__svg} src={stack1_svg} alt="" />
        )}
      </span>
      <span className={styles.box__stackItem}>
        {stack2_svg && (
          <img className={styles.box__stackItem__svg} src={stack2_svg} alt="" />
        )}
      </span>
      <button
        disabled={!href_demo}
        className={styles.box__button}
        onClick={() => window.open(href_demo, "_blank")}
      >
        DEMO
      </button>
      <button
        disabled={!href_repo}
        className={styles.box__button}
        onClick={() => window.open(href_repo, "_blank")}
      >
        REPO
      </button>

      {/* <div className="actions">
          <div className="button"></div>
          <div className="button"></div>
        </div> */}
    </div>
  );
}
