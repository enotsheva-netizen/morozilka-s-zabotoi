import { Link, NavLink } from 'react-router-dom'
import { Heart, Menu, Snowflake } from 'lucide-react'

const links = [['/', 'Главная'], ['/recipes', 'Рецепты'], ['/freezing', 'Морозилка'], ['/meal-prep', 'Меню на неделю']]
export default function Navbar({ favoritesCount }) {
  return <header className="site-header"><nav className="nav container">
    <Link className="brand" to="/"><span className="brand-mark"><Snowflake size={20}/></span><span>Морозилка<br/><b>с заботой</b></span></Link>
    <div className="nav-links">{links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}</div>
    <Link className="favorite-link" to="/recipes?favorites=1" aria-label="Избранное"><Heart size={20} fill={favoritesCount ? 'currentColor' : 'none'}/><span>{favoritesCount || ''}</span></Link>
    <button className="menu-button" aria-label="Открыть меню"><Menu /></button>
  </nav></header>
}
