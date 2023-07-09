import classNames from "classnames";

export const Square = ({
  value,
  onSquareClick,
}: {
  value: string;
  onSquareClick: any;
}) => {
  return (
    <button className="border border-black w-14 h-14" onClick={onSquareClick}>
      <p
        className={classNames(
          "text-lg font-bold",
          value === "X" ? "text-blue-500" : "text-yellow-500"
        )}
      >
        {value}
      </p>
    </button>
  );
};
