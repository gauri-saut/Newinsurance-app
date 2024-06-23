
function Careers() {
  return (
    <div className='container mx-auto p-8'>
      <h5 className='text-2xl font-bold text-center mb-8'>Careers in Life Insurance</h5>
      <p className='text-center mb-6'>
        At our company, we are committed to fostering a dynamic and inclusive workplace. We offer a variety of career opportunities that allow you to grow and thrive in a supportive environment. Whether you&apos;re looking to join us as an employee or advisor, we provide the tools and resources necessary to help you succeed. Explore the possibilities below and take the first step towards a rewarding career with us.
      </p>
      <div className='flex flex-wrap justify-center'>
        <div className='w-full md:w-1/2 lg:w-1/3 p-4 text-center'>
          <div className='relative'>
            <img src="/path/to/Cimg1.png" alt="Join us as an Employee" className='w-full h-auto rounded-lg' />
            <div className='absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 p-4 rounded-lg'>
              <h1 className='text-white text-2xl font-bold'>JOIN US AS AN</h1>
              <h5 className='text-white text-xl font-bold'>EMPLOYEE</h5>
            </div>
          </div>
          <p className='mt-4'>
            Become a part of our team as a full-time employee. Enjoy competitive benefits, ongoing training, and a welcoming work culture.
          </p>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3 p-4 text-center'>
          <div className='relative'>
            <img src="/path/to/Cimg2.png" alt="Join us as an Advisor" className='w-full h-auto rounded-lg' />
            <div className='absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 p-4 rounded-lg'>
              <h1 className='text-white text-2xl font-bold'>JOIN US AS AN</h1>
              <h5 className='text-white text-xl font-bold'>ADVISOR</h5>
            </div>
          </div>
          <p className='mt-4'>
            Join our network of advisors and help clients make informed decisions about their life insurance needs. Enjoy flexibility and support as you grow your career.
          </p>
        </div>
      </div>
      <div className='text-center mt-8'>
        <p>For more information or to apply, please contact us at:</p>
        <a href="mailto:career@ebs.com" className='text-blue-600 underline'>career@ebs.com</a>
      </div>
    </div>
  );
}

export default Careers;
