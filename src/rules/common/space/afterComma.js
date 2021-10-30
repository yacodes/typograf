import { privateLabel } from '../../../consts';
import { isDigit } from '../../../helpers/regExp';

const reComma = new RegExp('(.),([^)",:.?\\s\\/\\\\' + privateLabel + '])', 'g');

export default {
    name: 'common/space/afterComma',
    handler(text) {
        return text.replace(
            reComma,
            ($0, $1, $2) => isDigit($1) && isDigit($2) ? $0 : $1 + ', ' + $2
        );
    }
};
