import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { Movie } from '../../../../types/Movie';
import { useWishlist } from '../../../../contexts/Wishlist/WishlistContext';
import { useThemedColors } from '../../../../hooks/useThemedColors';
import { styles } from './styles';

type Props = {
  movie: Movie;
  style?: StyleProp<ViewStyle>;
};

export const WishlistToggleButton = ({ movie, style }: Props) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const colors = useThemedColors();
  const inWishlist = isInWishlist(movie.id);

  return (
    <Pressable
      style={[styles.wishlistIcon, style]}
      onPress={event => {
        event.stopPropagation();
        toggleWishlist(movie);
      }}
    >
      <FontAwesome6
        name="bookmark"
        iconStyle={inWishlist ? 'solid' : 'regular'}
        size={16}
        color={colors.white}
      />
    </Pressable>
  );
};
