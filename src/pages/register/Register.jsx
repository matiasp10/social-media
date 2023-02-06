import { Link } from 'react-router-dom';
import './Register.scss';

const Register = (props) => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Makanaqui Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab
            tenetur est molestiae ipsa aliquam quaerat perspiciatis, dolores
            architecto accusantium vitae voluptatum nulla provident
            exercitationem, non ullam quibusdam eveniet soluta!
          </p>
          <span>¿Ya tienes una cuenta?</span>
          <Link to={'/login'}>
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
