import { useNavigate } from "react-router-dom";
import {
  useCheckAuthQuery,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
} from "../api/auth-api";
import { useDispatch } from "react-redux";
import { setUserId } from "../../../app/store/slices/favorites-slice";
import { useEffect } from "react";

export const useAuth = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch();

  const [loginMutation, { isLoading: isLoginLoading }] = useLoginMutation();
  const [registerMutation, { isLoading: isRegisterLoading }] = useRegisterMutation();
  const [logoutMutation, { isLoading: isLogoutLoading }] = useLogoutMutation();

  // Проверяем авторизацию при загрузке
  const { data, isLoading: isCheckAuthLoading, refetch} = useCheckAuthQuery();
  // console.log(data, 'user');
  



  useEffect(() => {
    if (data?.user) {
      console.log('🔄 useEffect: данные из checkAuth изменились, устанавливаем userId:', data.user.id);
      dispatch(setUserId(data.user.id));
    } else {
      console.log('🔄 useEffect: нет пользователя, очищаем userId');
      dispatch(setUserId(null));
    }
  }, [data, dispatch]);



  const login = async (email: string, password: string) => {
    try {
      const result = await loginMutation({ email, password }).unwrap();
      // console.log("Login successful:", result);
      //  dispatch(setUserId(result.user.id));
      await refetch()
      navigate("/");
      // console.log(result, 'result');
      
      return result;
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error( "Login failed");
    }
  };

  const register = async (email: string, password: string, name?: string) => {
    try {
      const result = await registerMutation({ email, password, name }).unwrap();
      // console.log("Registration successful:", result);
      // dispatch(setUserId(result.user.id));
      await refetch()
      navigate("/");
      return result;
    } catch (error) {
      console.error("Registration failed:", error);
      throw new Error( "Registration failed");
    }
  };

  const logout = async () => {
    try {
      await logoutMutation().unwrap();
      // dispatch(setUserId(null));
      // navigate("/login");
        await refetch();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return {
    user: data?.user,
    isAuthenticated: !!data?.user && !!data?.token,
    isLoading:
      isCheckAuthLoading ||
      isLoginLoading ||
      isRegisterLoading ||
      isLogoutLoading,
    login,
    register,
    logout,
    refetch,
  };
};
