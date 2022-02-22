const Lock = ({ width = 12, height = 8, className, name, fill }) => {
  return (
    <svg
      name={name}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 13 15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7748 5H10.0623V3.57143C10.0623 1.6 8.4663 0 6.4998 0C4.5333 0 2.9373 1.6 2.9373 3.57143V5H2.2248C1.44105 5 0.799805 5.64286 0.799805 6.42857V13.5714C0.799805 14.3571 1.44105 15 2.2248 15H10.7748C11.5586 15 12.1998 14.3571 12.1998 13.5714V6.42857C12.1998 5.64286 11.5586 5 10.7748 5ZM6.4998 11.4286C5.71605 11.4286 5.0748 10.7857 5.0748 10C5.0748 9.21429 5.71605 8.57143 6.4998 8.57143C7.28355 8.57143 7.9248 9.21429 7.9248 10C7.9248 10.7857 7.28355 11.4286 6.4998 11.4286ZM8.70856 5H4.29105V3.57143C4.29105 2.35 5.28143 1.35714 6.4998 1.35714C7.71818 1.35714 8.70856 2.35 8.70856 3.57143V5Z"
        fill="rgba(0, 0, 0, 0.38)"
      />
    </svg>
  );
};

export default Lock;
