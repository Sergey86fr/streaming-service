import { useParams } from "react-router-dom";
import { useGetStaffByIdQuery } from "../../../shared/api/kinopoiskApi";
import { ErrorMessage } from "../../../shared/ui";
import { ActorDetails } from "../../../entities/actor";





 const ActorPage = () => {
  const { actorId } = useParams();

   const { data, isLoading, error } = useGetStaffByIdQuery(actorId!);
  
if(isLoading) return <div>Loading  . . .</div>
if(error) return <ErrorMessage />


return (
      <ActorDetails data={data} />
)
}

export default ActorPage;