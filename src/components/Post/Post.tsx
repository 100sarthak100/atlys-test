import { IPost } from "../../data";

interface IPostProps {
  item: IPost;
}

const Post = (props: IPostProps) => {
  const { item } = props;

  return (
    <div className="flex mb-[16px] flex-col bg-customGray border-2 border-inputBorderColor rounded-lg px-5 py-6">
      <div className="flex justify-between items-center mb-[22px]">
        <div className="flex gap-4">
          <img src={item.profileImg} />

          <div className="flex flex-col">
            <h3 className="text-inputLabelColor font-medium text-base">
              {item.createdBy}
            </h3>

            <p className="text-inputTextColor font-medium text-sm">
              {item.createdAt} {item?.isEdited ? " • Edited" : ""}
            </p>
          </div>
        </div>

        <img src="dots.png" />
      </div>

      <div className="flex gap-4 bg-postDescBgColor rounded-lg px-4 py-4 ">
        <div className="w-[48px] h-[48px] bg-customGray rounded-full flex justify-center items-center">
          <img className="" src={item.contentImg} />
        </div>

        <div className="flex-1">
          <h5 className="text-inputTextColor text-base font-normal">
            {item.content}
          </h5>
        </div>
      </div>

      <div className="flex gap-2 mt-[14px]">
        <img src="comment.svg" />

        {!!item.numOfComments && <p className="text-inputTextColor">{item.numOfComments} comments</p>}
      </div>
    </div>
  );
};

export default Post;
