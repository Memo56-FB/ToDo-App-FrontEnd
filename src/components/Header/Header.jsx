import bgMobileDark from '../../assets/images/bg-mobile-dark.jpg'
import bgDesktopDark from '../../assets/images/bg-desktop-dark.jpg'
import sunIcon from '../../assets/icons/icon-sun.svg'
const Header = () => (
    <header className='relative text-white'>
      <picture>
        <source srcSet={bgDesktopDark} media="(min-width: 1024px)" />
        <img src={bgMobileDark} alt="background" className='w-full object-cover' />
      </picture>
      <div className='absolute w-full flex justify-between font-semibold top-0 pt-12 px-6'>
        <h1 className='uppercase text-3xl tracking-[.3em]'>todo</h1>
        <button>
          <img src={sunIcon} alt="" className='object-contain'/>
        </button>
      </div>
    </header>
)

export {Header}