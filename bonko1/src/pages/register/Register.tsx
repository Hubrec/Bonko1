import './Register.css';
import Form from '../../components/Form/Form';

const Login = () => {
    return (
        <div className={'register'}>
            <Form type={'Register'} fieldText={'Username'} buttonText={'Register'} />
        </div>
    );
};

export default Login;