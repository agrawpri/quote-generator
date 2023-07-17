import {Button} from 'grommet';
import {Update} from 'grommet-icons';

export default function ReloadButton({onClickHandler}) {
    return (
        <div>
            <Button
                color={'dark-1'}
                primary
                onClick={onClickHandler}
                label={'Random'}
                reverse
                icon={<Update/>}
            />
        </div>
    );
}
