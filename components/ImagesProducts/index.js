import PropTypes from 'prop-types'

import { Box } from '../../util/template'

export const ImagesProducts = ({ 
  theme,
  src,
  alt,
  width,
  height,
  maxWidth,
  maxHeight
}) => {
  return (
    <Box width='auto'>
      <img src={src} alt={alt} width={width} height= {height} style={{ 
        maxWidth: maxWidth,
        maxHeight: maxHeight,
        }} />
    </Box>
  )
}

ImagesProducts.defaultProps = {
  maxHeight: '100%',
  maxHeight: '180px'
}

ImagesProducts.propTypes = {
  theme: PropTypes.object,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  maxWidth: PropTypes.string,
  maxHeight: PropTypes.string
}
