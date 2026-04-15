// import { iconComponents } from "../../../constants/top-lists"

import { iconComponents, type IconName } from "../../../features/navigation/model/types";

// import type { MovieIconName } from "../../../constants/top-lists";


// export const Icon = ({iconName:string}) => {
//     const IconComponent = iconComponents[iconName]
//     return <IconComponent />
// }

// type IconName = keyof typeof iconComponents;

interface IIconProps {
    iconName: IconName ;
    color:string;
}

export const Icon = ({iconName, color}:IIconProps) => {
    const IconComponent = iconComponents[iconName]
    return <IconComponent color={color} />
}