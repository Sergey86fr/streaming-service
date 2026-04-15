import { Link } from "react-router-dom";
import type { IFilmDetails } from "../../../entities/film/model/types";

interface IProfessionListProps {
   professionKey: string;
   staff: IFilmDetails[];
   maxPerson?: number;
}

interface GroupedByProfession {
   [key: string]: {
     professionText: string;
     people: IFilmDetails[];
   }
}

export const ProfessionList = ({professionKey, staff, maxPerson=5}:IProfessionListProps) => {
    const groupedByProfession = staff?.reduce((acc: GroupedByProfession,person) => {
       const key = person.professionKey
      if(!acc[key]) {
        acc[key] = {
            professionText: person.professionText,
            people: []
        }
      }

      if(person.nameRu.trim()) {
          acc[key].people.push(person)
      }

      return acc
    },{})

    const professionGroup = groupedByProfession?.[professionKey];

 if (!professionGroup || professionGroup.people.length === 0) {
        return null;
    }

    // Фильтруем и берем только первые 5 НЕПУСТЫХ имен
    // const validPeople = professionGroup.people
    //   .filter(p => {
    //     const name = p.nameRu?.trim();
    //     return name && name !== '';
    //   })
    //   .slice(0, 5); 

   
    return (
        <div>
           <span>{professionGroup.professionText}:
                <>
                    {professionGroup.people.slice(0,maxPerson).map((p, index) => (
                      <Link to={`/actor/${p.staffId}`} key={p.staffId}>
                          { p.nameRu}
                       {index < professionGroup.people.length - 1 ? ", ": ""}
                      </Link >
                    ))}
                </>
            </span>

        </div>
    )
}