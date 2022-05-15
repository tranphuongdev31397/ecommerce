import { Button, notification } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import PersonalInforForm from 'components/RegisterForm/PersonalInforForm';
import { auth } from 'config/firebase/firebase';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import UsersServices from 'services/UsersServices';
import { actSetCurrentUser } from 'slices/authSlice';

function MyAccountCtn() {
    const [form] = useForm();
    const currentUser = useSelector((state) => state.authReducer.currentUser);
    const dispatch = useDispatch();
    console.log(currentUser);
    const handleUpdateInfo = () => {
        form.validateFields().then(async (values) => {
            try {
                await UsersServices.updatePersonalInfo(currentUser.uid, values);
                dispatch(actSetCurrentUser({ ...currentUser, ...values }));
                notification.success({
                    message: 'Update your information success',
                    placement: 'bottomRight'
                });
            } catch (err) {
                throw err;
            }
        });
    };
    return (
        <div className="px-20 py-10 my-10 border-dashed border-2 rounded-lg shadow-md mx-10">
            <PersonalInforForm
                form={form}
                isRegister={false}
                initValues={currentUser}
            />
            <Button
                onClick={handleUpdateInfo}
                type="primary"
                className="w-full bg-sky-500 text-white hover:bg-white hover:text-black"
            >
                Submit
            </Button>
        </div>
    );
}

export default MyAccountCtn;
