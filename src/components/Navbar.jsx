
import CustomLink from './CustomLink';

const Navbar = ({ setExpand, expand }) => {
  return (
    <div className='lg:hidden relative'>
      <div className='h-24 w-full bg-white px-14 flex justify-between items-center z-20 absolute top-0'>
        <h2 className='text-2xl font-bold'>Faisal Moin</h2>
        <button onClick={() => setExpand(!expand)}>toggle</button>
      </div>
      <div className={`z-10 px-14 flex flex-col absolute h-24 w-full bg-white transition-all duration-300 ${expand ? 'top-24' : '-top-0'}`}>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/skill'>Skill</CustomLink>
        <CustomLink to='/projects'>Projects</CustomLink>
        <CustomLink to='/contact'>Contact</CustomLink>
      </div>
    </div>
  );
};

export default Navbar;