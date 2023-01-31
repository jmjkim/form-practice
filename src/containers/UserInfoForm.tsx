import SimpleForm from "../components/SimpleForm";
import TextField from "../components/TextField";
import {min, max} from "../hooks/useInput";

function UserInfoForm(): JSX.Element {
    return (
        <SimpleForm>
            <TextField source={'name'} label={'이름'} validate={[min(5), max(10)]}/>
            <TextField type='password' source={'password'} label={'비밀번호'} validate={[min(5), max(10)]}/>
        </SimpleForm>
    );
}

export default UserInfoForm;