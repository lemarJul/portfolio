export default function FlexRow({
  style = {},
  gap = "",
  className = "",
  ...props
}) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        gap: gap,
        ...style,
      }}
      {...props}
    />
  );
}
