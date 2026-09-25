// Innector's three-bar mark, used in place of the leading letter in section numbers ("A/01" -> icon + "/01").
// Geometry is taken from the supplied icon.svg, cropped to the bars so it sits like a glyph.
export default function SectionIcon() {
  return (
    <svg
      className="title-number__icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 315.72 327.05"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="#c49a6c">
        <rect x="0" y="0" width="315.72" height="65.39" />
        <rect x="0" y="131.38" width="315.72" height="64.65" />
        <rect x="0" y="261.7" width="315.72" height="65.35" />
      </g>
    </svg>
  );
}
