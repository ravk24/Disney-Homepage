const HeaderItem = ({ name, Icon }) => {
  return (
    <div className="flex text-white  items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8">
      <Icon />
      <h2>{name}</h2>
    </div>
  );
};
export default HeaderItem;
