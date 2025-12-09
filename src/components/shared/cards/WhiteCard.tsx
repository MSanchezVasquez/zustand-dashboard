import classNames from "classnames";

interface Props {
  children?: React.ReactNode;
  centered?: boolean;
  className?: string;
}

export const WhiteCard = ({ children, centered, className }: Props) => {
  return (
    <div
      className={classNames(
        "bg-white rounded-2xl p-6 w-full",
        "shadow-card hover:shadow-card-hover border border-transparent transition-all duration-300 ease-in-out",
        className,
        {
          "text-center": centered,
          "flex flex-col items-center": centered,
        }
      )}
    >
      {children}
    </div>
  );
};
