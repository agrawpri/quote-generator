import {Button} from 'grommet';
import {Update} from 'grommet-icons';

export default function ReloadButton({onClickHandler}) {
    return (
        <div>
            <Button
                color={'light-4'}
                primary
                onClick={onClickHandler}
                label={'Random'}
                reverse
                icon={<Update/>}
            />
        </div>
    );
}
