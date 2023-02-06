import { Link } from 'react-router-dom';
import './Login.scss';

const Login = (props) => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Bienvenidos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            dolor esse aliquid architecto, eveniet veritatis atque earum
            similique? Amet laboriosam doloribus ipsam excepturi blanditiis,
            iusto sed officiis reiciendis alias! Fugit.
          </p>
          <span>¿No tienes una cuenta?</span>
          <Link to={'/register'}>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
