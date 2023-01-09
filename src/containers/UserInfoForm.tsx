import SimpleForm from "../components/SimpleForm";
import TextField from "../components/TextField";

function UserInfoForm(): JSX.Element {
    return (
        <SimpleForm>
            <TextField source={'name'} label={'이름'}/>
            <TextField type='password' source={'password'} label={'비밀번호'}/>
        </SimpleForm>
    );
}

export default UserInfoForm;
