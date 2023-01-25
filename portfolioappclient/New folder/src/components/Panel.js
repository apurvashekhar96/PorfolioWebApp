import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const actualClassName = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  return (
    <div {...rest} className={actualClassName}>
      {children}
    </div>
  );
}

export default Panel;
