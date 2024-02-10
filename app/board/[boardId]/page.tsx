import { Canvas } from "./_components/canvas";
import { Loading } from "./_components/loading";
import { Room } from "@/components/room";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardId = ({ params }: BoardIdPageProps) => {
  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardId;
