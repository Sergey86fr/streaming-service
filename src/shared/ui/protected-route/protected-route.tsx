import { Navigate} from "react-router-dom";
import { useAuth } from "../../../entities/user/lib/use-auth";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();
  // const navigate= useNavigate()

  if (isLoading) {
    return <div>Загрузка...</div>; // Или спиннер
  }

  if (!isAuthenticated) {
    // Сохраняем путь, куда пытался зайти пользователь
    return <Navigate to="/"  replace />;
    // navigate('/')
  }

  return <>{children}</>;
};