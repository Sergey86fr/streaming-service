
import { useState, type FormEvent } from "react"
import cn from "classnames"
import styles from "./register-page.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../../entities/user/lib/use-auth"

const RegisterPage = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const{register, isLoading} = useAuth()
    const navigate = useNavigate()
    
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const[error, setError] = useState('')


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('')
        try {
            await register(email, password, name);
            navigate('/')
        } catch (error) {
          console.log(error);
          if(error instanceof Error) {
              setError(error.message)
          }
        }
    }


    return (
        <div className={cn(styles.registerPage)}>
            <form onSubmit={handleSubmit}>
                <input 
                 type="email"
                 placeholder="Имя"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 required
                />
                <input 
                 type="text"
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
          Есть аккаунт? <Link to="/auth/login">Авторизация</Link>
        </p>
        
            </form>

        </div>
    )
}

export default RegisterPage;