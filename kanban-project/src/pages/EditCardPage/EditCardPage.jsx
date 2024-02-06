import { useParams } from "react-router-dom";
import PopEditCard from "../../components/PopEditCard/PopEditCard";

export default function EditCardPage() {
  const { id } = useParams();

  return <PopEditCard id={id} />;
}
