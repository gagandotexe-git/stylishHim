'use client';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import api from "../lib/api"

import Input from "../../components/Input"
export default function RegisterPage() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await api.post('/auth/register', data);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      toast.success('Registered successfully!');
      window.location.href = '/';
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4 text-center">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input label="Name" name="name" register={register} />
        <Input label="Email" name="email" register={register} type="email" />
        <Input label="Password" name="password" register={register} type="password" />
        <div>
          <label className="block text-sm font-medium mb-1">Role</label>
          <select {...register('role')} className="w-full border p-2 rounded-lg">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Register</button>
      </form>
    </div>
  );
}
