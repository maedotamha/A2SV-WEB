import { useEffect, useState } from 'react';
import { useForm, type FieldErrors } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Form = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  const onError = (errors: FieldErrors<FormData>) => {
    console.error('Form errors:', errors);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="max-w-2xl mx-auto mt-12 px-6 py-10 bg-white shadow-xl rounded-2xl border border-gray-200">
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate className="space-y-6">
        <h2 className="text-3xl font-semibold text-center text-blue-700">Contact Us</h2>

        <div className="space-y-1">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="John Doe"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="example@mail.com"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Email is not valid',
              },
            })}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <div className="space-y-1">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Your message..."
            {...register('message', { required: 'Message is required' })}
          />
          {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all"
        >
          Send Message
        </button>

        {showSuccess && (
          <p className="text-green-600 text-center font-semibold mt-4">
            ✅ Message sent successfully!
          </p>
        )}
      </form>

      <DevTool control={control} />
    </div>
  );
};

export default Form;
