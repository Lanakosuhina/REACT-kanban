import { useParams } from "react-router-dom";
import PopBrowse from "../components/PopBrowse/PopBrowse";

export default function OneCardPage() {
const { taskId } = useParams();


  return (
    <PopBrowse taskId={taskId} />
  );

}