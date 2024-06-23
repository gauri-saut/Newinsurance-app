import { Carddata } from '../Config/Db'; 

const Card = () => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-20 m-4 flex-3 '>
      {Carddata.map((item) => (
        <div key={item.id} className='p-4 border border-gray-200 rounded-lg'>
          <div className='text-center'>
            <img src={item.imaglink} alt={item.title} className='w-32 h-32 mx-auto' />
          </div>
          <p className='mt-4 text-gray-600'>{item.discription}</p>
          <h3 className='mt-2 text-lg font-semibold'>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Card;
