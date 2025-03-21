interface propTypes {
  text: String;
  size: String;
}

export const Button = (props: propTypes) => {
  return (
    <button
      className={`relative ${
        props.size == "md" ? "py-3 px-3 text-md" : "py-2 px-3 text-sm"
      } rounded-lg font-medium  bg-gradient-to-b from-[#000000] to-[#454545] shadow-[0px_0px_12px_#5d5d5d]`}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 rounded-lg border border-white/20  [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className=" absolute inset-0 rounded-lg border  border-white/40  [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 rounded-lg shadow-[0px_4px_16px_rgb(93,93,93,.7)_inset]"></div>
      </div>
      <span className="">{props.text}</span>
    </button>
  );
};
