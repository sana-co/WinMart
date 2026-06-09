import logo from '../assets/winmart-logo.svg'

function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logo}
        alt="Win Mart Fashion"
        className={compact ? 'h-10 w-auto' : 'h-12 w-auto sm:h-14'}
      />
    </div>
  )
}

export default Logo
