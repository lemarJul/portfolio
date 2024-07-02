import FlexRow from "./FlexRow";

export default function FlexCol({ style, ...props }) {
  return (
    <FlexRow
      style={{
        flexDirection: "column",
        ...style,
      }}
      {...props}
    />
  );
}
