'use client';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import api from "../lib/api" 
import Input from "../../components/Input"

export default function LoginPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await api.post('/auth/login', data);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      toast.success('Login successful!');
      window.location.href = '/profile';
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input label="Email" name="email" register={register} type="email" />
        <Input label="Password" name="password" register={register} type="password" />
        <button type="submit" className="w-full  text-white py-2 rounded-lg "
        
    style={{backgroundColor: "var(--theme-color)"}}
        >Login</button>
      </form>
    </div>
  );
}
