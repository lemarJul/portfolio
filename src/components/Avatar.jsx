import profileImgSmall from "../assets/img/profile_small.png";

export default function Avatar({
  className,
  style = {},
  src = profileImgSmall,
  ...props
}) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: "50px",
        aspectRatio: "1/1",
        backgroundColor: "var(--color-yellow)",
        borderRadius: "50%",
        overflow: "hidden",
        ...style,
      }}
      {...props}
    >
      <img
        src={src}
        alt=""
        style={{
          width: "100%",
          position: "absolute",
          bottom: "0",
        }}
      />
    </div>
  );
}
