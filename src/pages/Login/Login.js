//CSS
import "./Login.css";
//Routes
import UseSing from "../../useUtils/UseSing";
//Librerias
import { Form, Button } from "react-bootstrap";

const Login = () => {
  //UseStates
  const {
    HandleChange,
    HandleSubmit,
    sessionAlert } = UseSing()
  return (
    <div>
      <div className="FondoDeForm">
        <div className="login">
          <Form className="FormLogin card">
            <div className="w-100">
              <h1 className="text-center PortadaTituloForm">
                <b>
                  <i>e-commers</i>
                </b>
              </h1>
            </div>
            <hr className="bg-light" />
            <Form.Group controlId="formBasicEmail">
              <div className="d-flex">
                <div className="text-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-person-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                  </svg>
                </div>
                <div>
                  <input
                    onChange={(e) => HandleChange(e)}
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                  />
                  {sessionAlert === true && <div className="text-danger">Vuelva a cargar su email!</div>}
                </div>
              </div>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <div className="d-flex mt-2">
                <div className="text-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-lock-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                  </svg>
                </div>
                <div>
                  <input
                    onChange={(e) => HandleChange(e)}
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                  />
                  {sessionAlert === true && <div className="text-danger">Vuelva a poner su contraseña!</div>}
                </div>
              </div>
            </Form.Group>
            <div className="mt-2">
              <b>
                <a href="/register">No tienes cuenta?, create una cuenta</a>
              </b>
            </div>
            <Button variant="primary" className="w-100 mt-2" type="submit" onClick={HandleSubmit}>
              <b>Sing up</b>
            </Button>
          </Form>
          <div className="About">
            <div className="AboutImgen">
              <div className="AboutText">
                <h1 className="AboutTitulo text-center">
                  About us
                </h1>
                <p>
                  a Jr. frontend developer. I am currently working for freelance. I began my career as a frontend developer in the 2020 year and have slowly over time taken on a more web based technical front-end developer role. work in details that many frontend developers tend to overlook. Being a hybrid frontend dev and technician with knowledge in digital content allows me to fill two roles simultaneously, which in today’s economy can be very beneficial to any company. Having studied at Coder house and done real projects has given me a wealth of knowledge and a diverse skill set to be able to tackle any development project that comes my way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
