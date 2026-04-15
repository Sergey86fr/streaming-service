export interface IMockUser {
  id: number;
  email: string;
  password: string;
  name?: string;
  createdAt: string;
}


const MOCK_DB_KEY = 'mock_users';

class MockDB {
    private getUsers(): IMockUser[]|null {
        const users = localStorage.getItem(MOCK_DB_KEY);
        if(!users) {
            return null;
        }

        return JSON.parse(users);
    }

    private saveUsers(users: IMockUser[]) {
        localStorage.setItem(MOCK_DB_KEY, JSON.stringify(users))
    }

    findUserByEmail(email:string): IMockUser | undefined {
        const users = this.getUsers()
        if(!users) {
            return undefined
        }
       return users.find((user) => user.email === email)
    }

    findUserByCredential(email:string, password:string):IMockUser | undefined {
         const users = this.getUsers()
        if(!users) {
            return undefined
        }
       return users.find((user) => user.email === email && user.password === password)
    }

    createUser(userData:{email:string, password:string, name?:string}):IMockUser {
        const users = this.getUsers() || [];

        const newUser:IMockUser = {
            id: Date.now(),
            ...userData,
            createdAt: new Date().toISOString(),
        }
        

        users.push(newUser);
        this.saveUsers(users);
        return newUser
    }
}

export const mockDB  = new MockDB();
