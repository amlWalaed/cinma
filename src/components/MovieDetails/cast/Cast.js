import './cast.scss'
export default function Cast({actor}){
    return <div className="actor">
        <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name}/>
        <div className="actor-name">{actor.name}</div>
    </div>
} 