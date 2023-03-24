import { FC } from 'react';
import Select from 'react-select';
import { IOption } from 'src/pages/CharactersPage/ui/CharactersPage';
import './Select.scss';

interface IProps {
    options: IOption[]
    onChange:(open: IOption)=> void
    label: string
}

export const SelectMenu: FC<IProps> = (props) => {
    const { options, onChange, label = 'All' } = props;

    return (
        <Select
            options={options}
            onChange={onChange}
            placeholder={label}
            className="react-select-container"
            classNamePrefix="react-select"
        />
    );
};
