import Dropdown from 'react-bootstrap/Dropdown';
import { avatarList } from '../constants';
import { Avatar } from '@material-ui/core';
import { AVATAR__KEY__ } from '../pages/SignUp/const';

const DropDownAvatars = ({ parentState, setParentState }) => {
  const handleChangeAvatar = (id) => {
    setParentState({ ...parentState, [AVATAR__KEY__]: id });
  }
  const list = avatarList.map((item) => {
    return (
      <Dropdown.Item onClick={() => handleChangeAvatar(item.id)}>
        <Avatar src={`https://avatars.dicebear.com/api/human/${item.id}.svg`} />
      </Dropdown.Item>
    );
  });
  return (
    <Dropdown.Menu>
      {list}
    </Dropdown.Menu>
  );
}

export default DropDownAvatars;