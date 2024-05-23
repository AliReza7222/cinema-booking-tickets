import { Link } from 'react-router-dom';
import { RiLockPasswordLine } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa6";
import { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useSetPassword } from '../../../hooks/useSetPassword';


function SetPassword() {
    const { register, watch, formState: { errors } } = useForm({ mode: 'onTouched' });
    const { handleSubmitSetPassword } = useSetPassword()

    return (
        <main className="w-full">
            <section className="pt-7">
                <Toaster position="top-left" reverseOrder={false} />
                <div className="flex flex-col items-center justify-center px-6 mx-auto lg:py-0">
                    <div className="w-full bg-gray-900 text-white border border-gray-700 rounded-2xl shadow md:mt-0 sm:max-w-md xl:p-0 relative">
                        <div className="py-6 px-12 space-y-4 md:space-y-6 sm:py-8">
                            <div className='text-center text-lg'>
                                <h5>لطفا رمز عبور خود را انتخاب و آنرا وارد کنید.</h5>
                            </div>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmitSetPassword}>
                                <div className="flex gap-5 justify-between py-5 pl-16 pr-6 mt-7 w-full bg-gray-800 rounded-3xl text-slate-500">
                                    <div className="flex gap-3 items-center">
                                        <RiLockPasswordLine className="shrink-0 self-stretch aspect-[0.96]" size="24" />
                                        <div className="shrink-0 self-stretch my-auto w-px border border-solid aspect-[0.07] border-slate-500 stroke-[1px] stroke-slate-300"></div>
                                        <label htmlFor="firstName" className="sr-only">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="رمز عبور"
                                            className="self-stretch my-auto bg-transparent outline-none"
                                            {...register('password', {
                                                required: true,
                                                minLength: {
                                                    value: 8,
                                                    message: 'حداقل تعداد کاراکتر ۸ عدد است',
                                                }
                                            })}
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-5 justify-between py-5 pl-16 pr-6 mt-7 w-full bg-gray-800 rounded-3xl text-slate-500">
                                    <div className="flex gap-3 items-center">
                                        <RiLockPasswordLine className="shrink-0 self-stretch aspect-[0.96]" size="24" />
                                        <div className="shrink-0 self-stretch my-auto w-px border border-solid aspect-[0.07] border-slate-500 stroke-[1px] stroke-slate-300"></div>
                                        <label htmlFor="lastName" className="sr-only">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            placeholder="تکرار رمز عبور"
                                            className="self-stretch my-auto bg-transparent outline-none"
                                            {...register('confirmPassword', {
                                                required: true,
                                                validate: (value) => {
                                                    if (watch('password') !== value) {
                                                        return 'عدم تطابق با رمز وارد شده'
                                                    }
                                                }
                                            })}
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-[#ff8036] hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-200 font-medium gap-5 rounded-3xl mt-7 px-16 py-3.5 text-xl text-center"
                                >
                                    ذخیره تغییرات
                                </button>
                            </form>
                            <div className='flex justify-start text-slate-500 pt-2'>
                                <Link to='/dashboard/change-password' className='flex justify-center items-center gap-2'>
                                    <RiLockPasswordLine size='20' />
                                    <p>تغییر رمز عبور</p>
                                    <FaAngleLeft />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SetPassword