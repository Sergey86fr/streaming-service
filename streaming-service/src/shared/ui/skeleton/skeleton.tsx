import styles from "./skeleton.module.css";
import cn from "classnames";

export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  className?: string;
  variant?: "text" | "circular" | "rectangular";
//   style?: React.CSSProperties;
}

export const Skeleton = ({
  width = "100%",
  height = "20px",
  borderRadius = 8,
  className,
  variant = "rectangular",
}: SkeletonProps) => {

  const getVariantStyles = () => {
    switch (variant) {
      case "circular":
        return { borderRadius: "50%" };
      case "text":
        return { borderRadius: "4px" };
      case "rectangular":
        return { borderRadius: typeof borderRadius === 'number'? `${borderRadius}px`:`${borderRadius}` };
      default:
        return {};
    }
  };

  return <div className={cn(styles.skeletonBase, className)} style={{width,height, ...getVariantStyles()}}></div>;
};
