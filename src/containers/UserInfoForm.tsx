import SimpleForm from "../components/SimpleForm";
import TextField from "../components/TextField";
import SelectboxField from "../components/SelectboxField";
import {min, max} from "../hooks/useInput";
import CheckboxField from "../components/CheckboxField";

function UserInfoForm(): JSX.Element {
    return (
        <SimpleForm>
            <TextField source={'name'} label={'이름'} validate={[min(5), max(10)]}/>
            <TextField type='password' source={'password'} label={'비밀번호'} validate={[min(5), max(10)]}/>

            <SelectboxField type={'radio'} source={'gender'} label={'성별'}  />
            <CheckboxField type={'checkbox'} source={'location'} label={'거주 국가'}  />
        </SimpleForm>
    );
}

export default UserInfoForm;