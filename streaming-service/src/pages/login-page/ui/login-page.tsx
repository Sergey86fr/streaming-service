import { useState, type FormEvent } from "react"
import styles from "./login-page.module.css"
import cn from "classnames"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../../entities/user/lib/use-auth"

const LoginPage = () => {

    const{login} = useAuth()
    const navigate = useNavigate()
    
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const[error, setError] = useState('')


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('')
        try {
            await login(email, password);
            navigate('/')
        } catch (error) {
          console.log(error);
          if(error instanceof Error) {
              setError(error.message)
          }
        }
    }


    return (
        <div className={cn(styles.loginPage)}>
            <form onSubmit={handleSubmit}>
                <input 
                 type="email"
                 placeholder="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required
                />
                <input
                  type="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">войти</button>
                <p>
          Нет аккаунта? <Link to="/auth/register">Регистрация</Link>
        </p>
        
            </form>

        </div>
    )
}

export default LoginPage;