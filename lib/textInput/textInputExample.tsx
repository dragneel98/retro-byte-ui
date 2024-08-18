import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextInput } from './textInput';

interface FormValues {
    username: string;
    // Agrega más campos si es necesario
}

export const MyForm: React.FC = () => {
    const { register, handleSubmit } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
                label="Username"
                primaryColor="#e74c3c"
                secondaryColor="#8e44ad"
                register={register("username")}
            />
            <button type="submit">Submit</button>
        </form>
    );
};
