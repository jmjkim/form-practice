import SimpleForm from "../components/SimpleForm";
import TextField from "../components/TextField";
import SelectboxField from "../components/SelectboxField";
// import {min, max, required} from "../hooks/useInput";
import {min, max, required} from "../utils/utils"
import CheckboxField from "../components/CheckboxField";

function UserInfoForm(): JSX.Element {
    return (
        <SimpleForm>
            <TextField source={'name'} label={'이름'} validate={[min(5), max(10)]}/>
            <TextField type='password' source={'password'} label={'비밀번호'} validate={[min(5), max(10)]}/>

            <SelectboxField source={'gender'} label={'성별'} validate={[required()]}/>
            {/*<SelectboxField source={'language'} label={'언어'} validate={[required()]}/>*/}
            <CheckboxField type={'checkbox'} source={'location'} label={'거주 국가'} validate={[required()]}/>
        </SimpleForm>
    );
}

export default UserInfoForm;
