import { useState } from "react";

import Auth from "../Auth/Auth";
import Post from "../../components/Post/Post";
import Modal from "../../components/Modal/Modal";
import { dashboardData, IPost } from "../../data";
import Welcome from "../../components/Welcome/Welcome";
import CreatePost from "../../components/CreatePost/CreatePost";

const Home = () => {
  const [data, setData] = useState(dashboardData);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col px-4 py-4 mb-10 mt-[69px]">
      <Welcome title={data?.title} desc={data?.desc} />

      <div onClick={openModal}>
        <CreatePost />

        <div className="flex flex-col max-w-2xl mb-6">
          {data?.posts.map((item: IPost) => {
            return <Post item={item} key={item?.id} />;
          })}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Auth onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default Home;
