import { Clock3, Heart, Snowflake } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function RecipeCard({ recipe, isFavorite, onToggleFavorite }) {
  return <article className="recipe-card">
    <div className={`recipe-art ${recipe.color}`}><span>{recipe.emoji}</span><button onClick={() => onToggleFavorite(recipe.id)} aria-label="Добавить в избранное"><Heart size={19} fill={isFavorite ? 'currentColor' : 'none'} /></button><small>{recipe.category}</small></div>
    <div className="recipe-copy"><div className="recipe-meta"><span><Clock3 size={15}/>{recipe.prepTime + recipe.cookTime} мин</span><span>{recipe.calories} ккал</span></div><h3><Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link></h3><div className="freeze-label"><Snowflake size={15}/> В морозилке: {recipe.storage}</div></div>
  </article>
}
