import { BackButton } from "../../../../shared/ui";
import type { IActorDetailsResponse } from "../../model/types";
import styles from "./actor-details.module.css";
import cn from "classnames";

interface IActorDetailsProps {
  data: IActorDetailsResponse | undefined;
}

export const ActorDetails = ({ data }: IActorDetailsProps) => {
  return (
    <div className={cn(styles.actorCard)}>
      <BackButton />
      <div>
        <img src={data?.posterUrl} />
      </div>
      <div>{data?.nameRu}</div>
    </div>
  );
};
