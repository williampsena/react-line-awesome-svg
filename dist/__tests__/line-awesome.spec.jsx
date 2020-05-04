import LineAwesome from '~line-awesome';
import { create } from 'react-test-renderer';
import SvgThumbsUp from '~icons/ThumbsUp';
describe('LineAwesome component', () => {
    test('Matches the snapshot"', () => {
        const icon = create(<LineAwesome icon={SvgThumbsUp}/>);
        expect(icon.toJSON()).toMatchSnapshot();
    });
});
