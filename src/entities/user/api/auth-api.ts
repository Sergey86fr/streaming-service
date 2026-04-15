import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ILoginRequest, IRegisterRequest, IUser } from "../model/types";
import { mockDB } from "../lib/mock-db";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fakeBaseQuery(),
  //  tagTypes: ['Auth'], // Добавляем теги
  endpoints: (builder) => ({
    login: builder.mutation<{ user: IUser; token: string }, ILoginRequest>({
      async queryFn({ email, password }) {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        try {
          const user = mockDB.findUserByCredential(email, password);

          if (!user) {
            return {
              error: { status: 401, data: "Неверный email или пароль!" },
            };
          }

          const token = `mock-token-${user.id}-${Date.now()}`;

          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { password: _, ...userWithoutPassword } = user;

          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(userWithoutPassword));

          return {
            data: {
              user: userWithoutPassword,
              token,
            },
          };
        } catch (e) {
          console.log(e);

           return {
            error: { status: 500, data: 'Ошибка сервера' },
          };
        }
      },
      //  invalidatesTags: ['Auth'], // Инвалидируем после логина
    }),

    register: builder.mutation<{ user: IUser; token: string },IRegisterRequest>({
      async queryFn({ email, password, name }) {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        try {
          if (mockDB.findUserByEmail(email)) {
            return {
              error: {
                status: 400,
                data: "Пользователь с таким email уже существует!",
              },
            };
          }
          const newUser = mockDB.createUser({ email, password, name });
          const token = `mock-token-${newUser.id}-${Date.now()}`;
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { password: _, ...userWithoutPassword } = newUser;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(userWithoutPassword));

          return {
            data: {
              user: userWithoutPassword,
              token,
            },
          };
        } catch (e) {
            console.log(e);
            
          return {
            error: { status: 500, data: "Ошибка регистрации!" },
          };
        }
      },
      //  invalidatesTags: ['Auth'],
    }),
   

    checkAuth: builder.query<{ user: IUser | null; token: string |null }, void>({
      async queryFn() {
        await new Promise(resolve => setTimeout(resolve, 500));

        try {
          const token = localStorage.getItem('token');
          const userJson = localStorage.getItem('user');
          console.log(token, userJson, 'проверка');
          

           if (!token || !userJson) {
        // Возвращаем data с null, а не ошибку!
        return {
          data: { user: null, token: null }
        };
      }

          const user = JSON.parse(userJson);

          return {
            data: { user, token },
          };
        } catch (e) {
            console.log(e);
            
      return { error: { status: 500, statusText: 'Internal Server Error', data: "Coin landed on its edge!" } }
      }
      },
      //  providesTags: ['Auth'], // Предоставляем тег
      //  keepUnusedDataFor: 0, // Не кэшируем данные
      // refetchOnMountOrArgChange: true, // Всегда обновляем при монтировании
    }),

    logout: builder.mutation<void, void>({
      async queryFn() {
        await new Promise(resolve => setTimeout(resolve, 300));

        localStorage.removeItem('token');
        localStorage.removeItem('user');

        return { data: undefined };
      },
      //  invalidatesTags: ['Auth'], // Инвалидируем при выходе
    }),
  }),
});


export const {
  useLoginMutation,
  useRegisterMutation,
  useCheckAuthQuery,
  useLogoutMutation,
} = authApi;