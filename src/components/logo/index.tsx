import LogoImg from '../../assets/logo.svg'
export const Logo = ({ className}: { className: string}) => {
  return (
      <img  className={className} src={LogoImg} alt="logo" />)
}