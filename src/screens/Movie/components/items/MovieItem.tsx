import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { Movie } from '../../../../types/Movie';
import { styles } from './styles';
import { TextCustom } from '../../../../components/atoms/Text/TextCustom';
import { MovieCard } from '../items/MovieCard';
import { useMovieModal } from '../../../../contexts/MovieModal/MovieModalContext';
import { useThemedColors } from '../../../../hooks/useThemedColors';
import { WishlistToggleButton } from './WishlistToggleButton';

type Props = {
  movie: Movie;
  showToggleButton?: boolean;
  styleMovieCard?: StyleProp<ViewStyle>;
};

export const MovieItem = ({
  movie,
  styleMovieCard,
  showToggleButton = true,
}: Props) => {
  const { openMovieDetails } = useMovieModal();
  const { poster_path, title, id } = movie;
  const colors = useThemedColors();

  return (
    <TouchableOpacity
      style={styles.movieItemContainer}
      onPress={() => openMovieDetails(id)}
    >
      <MovieCard
        posterPath={poster_path}
        style={styleMovieCard ?? styles.movieCard}
      />
      {showToggleButton && <WishlistToggleButton movie={movie} />}
      <TextCustom
        style={[styles.movieTitle, { color: colors.textPrimary }]}
        numberOfLines={1}
      >
        {title}
      </TextCustom>
    </TouchableOpacity>
  );
};
