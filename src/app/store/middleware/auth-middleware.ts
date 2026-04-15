// import { createListenerMiddleware } from '@reduxjs/toolkit';
// import type { RootState } from '../store';
//  import { setUserId } from "../slices/favorites-slice"

// export const authMiddleware = createListenerMiddleware();

// authMiddleware.startListening({
//   predicate: (action) => {
//     // Слушаем действия, которые меняют пользователя
//     return action.type === 'auth/login/fulfilled' || 
//            action.type === 'auth/register/fulfilled' ||
//            action.type === 'auth/logout/fulfilled' ||
//            action.type === 'auth/checkAuth/fulfilled';
//   },
//   effect: (action, listenerApi) => {
//     const state = listenerApi.getState() as RootState;
    
//     if (action.type === 'auth/logout/fulfilled') {
//       // При выходе очищаем пользователя в favorites
//       listenerApi.dispatch(setUserId(null));
//     } else if (action.payload?.user) {
//       // При входе/регистрации устанавливаем пользователя
//       listenerApi.dispatch(setUserId(action.payload.user.id));
//     }
//   },
// });