import CustomButton from "../CustomButton/CustomButton";

const CreatePost = () => {
  return (
    <div className="flex mb-[16px] flex-col bg-customGray border-2 border-inputBorderColor rounded-lg px-5 py-6">
      <h2 className="font-medium text-inputLabelColor text-base mb-4">
        Create post
      </h2>

      <div className="flex gap-4 bg-postDescBgColor rounded-lg px-4 py-4 items-center">
        <div className="w-[48px] h-[48px] bg-customGray rounded-full flex justify-center items-center">
          <img className="" src="commentText.png" />
        </div>

        <div className="flex-1 justify-center">
          <h5 className="text-inputTextColor text-base font-normal ">
            How are you feeling today?
          </h5>
        </div>
      </div>

      <div className="flex mt-[14px] self-end">
        <CustomButton title="Post" />
      </div>
    </div>
  );
};

export default CreatePost;
