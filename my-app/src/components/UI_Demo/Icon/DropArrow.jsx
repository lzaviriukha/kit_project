const DropArrow = ({ width = 12, height = 8, className, name }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      name={name}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.59 0L6 4.94467L1.41 0L0 1.52227L6 8L12 1.52227L10.59 0Z"
        fill="black"
        fill-opacity="0.38"
      />
    </svg>
  );
};

export default DropArrow;
