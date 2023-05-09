import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieCastFetch } from '../../services/api';
import noPhoto from '../../images/no_profile_picture.jpg';
import s from './cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    movieCastFetch(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  if (cast !== '') {
    return (
      <>
        <ul className={s.list}>
          {cast.map(actor => (
            <li key={actor.id}>
              <div className={s.wrapper}>
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                  />
                ) : (
                  <img src={noPhoto} alt={actor.name} />
                )}
                <h3>{actor.name}</h3>
                {actor.character ? (
                  <h4>"{actor.character}"</h4>
                ) : (
                  <h4>{null}</h4>
                )}
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default Cast;
