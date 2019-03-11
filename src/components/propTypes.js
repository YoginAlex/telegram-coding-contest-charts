import PropTypes from 'prop-types';
import { GRAPH_TYPES } from './enums';

const graphPropType = PropTypes.arrayOf(
  PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
);

const typesPropType = PropTypes.objectOf(
  PropTypes.oneOf([...Object.values(GRAPH_TYPES)]),
);

const arrayOfStringsPropTypes = PropTypes.objectOf(PropTypes.string);

const graphDataPropType = PropTypes.shape({
  columns: PropTypes.arrayOf(graphPropType).isRequired,
  types: typesPropType.isRequired,
  names: arrayOfStringsPropTypes.isRequired,
  colors: arrayOfStringsPropTypes.isRequired,
});

export { graphDataPropType as default, graphDataPropType };
