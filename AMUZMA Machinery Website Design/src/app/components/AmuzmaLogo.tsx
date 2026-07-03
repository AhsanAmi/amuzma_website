export function AmuzmaLogoRed({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 44" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="88"
        y="32"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontWeight="900"
        fontSize="28"
        letterSpacing="3"
        fill="#B5122B"
        style={{ fontStyle: "italic" }}
      >
        AMUZMA
      </text>
      <circle cx="172" cy="10" r="5" fill="none" stroke="#B5122B" strokeWidth="1.5" />
      <text x="172" y="13.5" textAnchor="middle" fontFamily="Inter" fontSize="6" fill="#B5122B">®</text>
    </svg>
  );
}

export function AmuzmaLogoWhite({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 52" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="108"
        y="38"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontWeight="900"
        fontSize="34"
        letterSpacing="3"
        fill="white"
        style={{ fontStyle: "italic" }}
      >
        AMUZMA
      </text>
      <circle cx="210" cy="12" r="6" fill="none" stroke="white" strokeWidth="1.5" />
      <text x="210" y="16" textAnchor="middle" fontFamily="Inter" fontSize="7" fill="white">®</text>
    </svg>
  );
}
