import React from "react";
import Avatar from "../Avatar";
import Col from "../FlexCol";
import Row from "../FlexRow";

function SocialMediaCard({ style = {}, className = "", ...props }) {
  const s = {
    container: {
      alignItems: "center",
      backgroundColor: "var(--color-light)",
      border: "2px solid var(--color-grey)",
      padding: "0 15%",
      ...style,
    },
    content: {
      position: "relative",
      paddingLeft: "var(--spacing-large)",
      borderLeft: "2px solid var(--color-grey)",
    },
    avatar: {
      position: "absolute",
      top: "0",
      left: "0",
      transform: "translateX( -50%)",
      boxShadow: "0 0 0 8px var(--color-light)",
    },
    name: {
      fontSize: "var(--font-size-large)",
      fontWeight: "bold",
    },
    subtitle: {
      gap: "var(--spacing-small)",
      color: "var(--color-grey)",
    },
    userName: {
      color: "var(--color-dark)",
    },
  };

  return (
    <Row className={className} style={s.container} {...props}>
      <Col gap="var(--spacing-medium)" style={s.content}>
        <Avatar style={s.avatar} />
        <Col style={{ fontSize: "var(--font-size-medium" }}>
          <span style={s.name}>Julien lemarchand</span>
          <Row style={s.subtitle}>
            <span style={s.userName}>@lemarJul</span>
            <span>•</span>
            <span>now</span>
          </Row>
        </Col>
        <Col>
          <p>Hello ! Moi c’est Julien.</p>{" "}
          <p>
            Je suis un développeur belge basé à Lille. Depuis 2021 et je
            m’applique à construire des solutions performantes et évolutives...
          </p>
          <a href="#about">lire plus..</a>
        </Col>
      </Col>
    </Row>
  );
}

export default SocialMediaCard;
