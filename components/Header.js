import Link from 'next/link';



export default function Header() {
  return (


<header className="site-header">
  <div className="container header-inner">
    <button className="menu-btn" aria-label="Open menu">
      <span />
      <span />
      <span />
    </button>

    <Link href="/" className="logo logo-boxes">
      <span className="box">B</span>
      <span className="box">B</span>
      <span className="box">C</span>
    </Link>

    <div className="header-gap" />
  </div>
</header>
  )
}
