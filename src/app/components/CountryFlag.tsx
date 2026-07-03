type CountryFlagProps = {
  code: string;
  width?: number;
  height?: number;
  className?: string;
};

export function CountryFlag({
  code,
  width = 26,
  height = 17,
  className = "",
}: CountryFlagProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
      alt=""
      width={width}
      height={height}
      className={`shrink-0 object-cover ${className}`}
      aria-hidden="true"
    />
  );
}
