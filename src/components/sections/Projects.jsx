import ProjectCard from "../ProjectCard";
import css3_icon from "../../assets/icons/css3.svg";
import js_icon from "../../assets/icons/js.svg";
import css from "./Projects.module.css";
import Slider from "../Slider";

export default function ProjectsSection() {
  return (
    <Slider>
      <ProjectCard
        img={"./projects/todo-list.png"}
        title={"Todo List"}
        href_demo={"https://lemarjul.github.io/simple-todo/"}
        href_repo={"https://github.com/lemarJul/simple-todo"}
        stack1_svg={js_icon}
        stack2_svg={css3_icon}
        contentBackgroundColor={"#faebd8"}
      >
        Une simple Todo List réalisée en HTML, CSS et Vanilla JavaScript .
      </ProjectCard>
      <ProjectCard
        img={"./projects/hue-waves.png"}
        title={"Hue Waves"}
        href_demo={"https://lemarjul.github.io/canvas-waves/"}
        href_repo={"https://github.com/lemarJul/canvas-waves"}
        stack1_svg={js_icon}
        stack2_svg={css3_icon}
        contentBackgroundColor={"#00E4DF"}
      >
        Une simple Todo List réalisée en HTML, CSS et Vanilla JavaScript .
      </ProjectCard>
      <ProjectCard
        img={"./projects/todo-list.png"}
        title={"Project 3"}
        href_demo={"https://lemarjul.github.io/simple-todo/"}
        href_repo={"https://github.com/lemarJul/simple-todo"}
        stack1_svg={js_icon}
        stack2_svg={css3_icon}
        contentBackgroundColor={"#faebd8"}
      >
        Une simple Todo List réalisée en HTML, CSS et Vanilla JavaScript .
      </ProjectCard>
      <ProjectCard
        img={"./projects/hue-waves.png"}
        title={"Project 4"}
        href_demo={"https://lemarjul.github.io/canvas-waves/"}
        href_repo={"https://github.com/lemarJul/canvas-waves"}
        stack1_svg={js_icon}
        stack2_svg={css3_icon}
        contentBackgroundColor={"#00E4DF"}
      >
        Une simple Todo List réalisée en HTML, CSS et Vanilla JavaScript .
      </ProjectCard>
    </Slider>
  );
}
