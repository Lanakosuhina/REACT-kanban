import { useParams } from "react-router-dom";
import PopBrowse from "../../components/PopBrowse/PopBrowse01";

export default function OneCardPage() {
const { id } = useParams();


  return (
    <PopBrowse id={id} />
  );

}