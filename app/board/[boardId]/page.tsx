import { Canvas } from "./_components/canvas";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
};

const BoardId = ({
  params,
}: BoardIdPageProps) => {
  return (
    <Canvas boardId={params.boardId} />
  );
};

export default BoardId;
