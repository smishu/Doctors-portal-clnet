import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';


const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center' >
            <div className='flex-1 hidden lg:block' >
                <img className='mt-[-150px]' src={doctor} alt="" />

            </div >
            <div className='flex-1 px-5' >
                <h3 className='text-xl text-primary font-bold py-5' > Appointment</h3 >
                <h2 className='text-3xl text-white' > Make an Appointment Today</h2 >
                <p className='text-white pb-5' > Lorem ipsum dolor, sit amet consectetur adipisicing elit.At, dolores ratione obcaecati, est unde qui incidunt repellendus a nihil debitis asperiores consequatur perferendis impedit nam earum optio dolore fuga ? Facere et porro tenetur delectus aspernatur optio hic a! Blanditiis, aut ?</p >
                <PrimaryButton>Get Started</PrimaryButton>

            </div >
        </section >
    );
};

export default MakeAppointment;