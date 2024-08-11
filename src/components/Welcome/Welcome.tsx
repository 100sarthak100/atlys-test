interface IWelcome {
  desc: string;
  title: string;
}

const Welcome = (props: IWelcome) => {
  const { title, desc } = props;

  return (
    <div className="bg-transparent mb-[50px]">
      <h1 className="text-inputLabelColor text-[28px] font-medium">{title}</h1>
      <p className="text-inputTextColor font-normal text-[16px] max-w-[80%]">{desc}</p>
    </div>
  );
};

export default Welcome;
