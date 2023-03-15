type Props = {
  onClick?: () => void;
};

export const BurgerIcon = ({ onClick }: Props) => {
  return (
    <div className='block lg:hidden'>
      <div className='flex cursor-pointer flex-col gap-1' onClick={onClick}>
        {Array.from({ length: 3 }).map((el, idx) => (
          <span key={idx} className='block h-[2px] w-[26px] bg-white' />
        ))}
      </div>
    </div>
  );
};
