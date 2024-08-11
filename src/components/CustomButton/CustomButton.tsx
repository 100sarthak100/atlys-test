interface ICustomButton {
  title: string;
}

const CustomButton = (props: ICustomButton) => {
  const { title } = props;

  return (
    <button className="w-full bg-postBtnColor px-[38px] py-3 text-white rounded-[4px] font-medium text-base">
      {title}
    </button>
  );
};

export default CustomButton;
