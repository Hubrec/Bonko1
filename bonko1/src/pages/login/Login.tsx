import './Login.css';
import Form from '../../components/Form/Form';

const Login = () => {
    return (
        <div className={'login'}>
            <Form type={'Login'} fieldText={'Username'} buttonText={'Login'} />
        </div>
    );
};

export default Login;