import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button_ from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { backgroundGradiant } from '../style/styled_components/backgroundGradiant';
import DropDownAvatars from './DropDownAvatars';
import {
  NAME_LABEL, NAME_FIELD_PLACEHOLDER, EMPTY_AND_LARGE_NAME_FIELD_ERROR, EMAIL_LABEL, EMAIL_FIELD_PLACEHOLDER, EMPTY_EMAIL_FIELD_ERROR, INVALID_EMAIL_FIELD_ERROR, DOB_LABLE, EMPTY_DOB_ERROR, AVATAR_LABLE, SELECT_AVATAR_ERROR, COUNTRY_LABLE, SELECT_COUNTRY_ERROR,
  NAME__KEY__, EMAIL__KEY__, DOB__KEY__, AVATAR__KEY__, COUNTRY__KEY__,
  NAME__ERROR__, EMAIL__ERROR__, DOB__ERROR__, AVATAR__ERROR__, COUNTRY__ERROR__,
} from '../pages/SignUp/const';
import { findAllByTestId } from '@testing-library/react';
import { Avatar } from '@material-ui/core';
import { saveEmployee } from '../APIUtils';

const Form_ = ({ personObj }) => {
  const [state, setState] = useState({
    [NAME__KEY__]: '',
    [EMAIL__KEY__]: '',
    [DOB__KEY__]: '',
    [AVATAR__KEY__]: '',
    [COUNTRY__KEY__]: '',

    [NAME__ERROR__]: false,
    [EMAIL__ERROR__]: false,
    [DOB__ERROR__]: false,
    [AVATAR__ERROR__]: false,
    [COUNTRY__ERROR__]: false,
  });
  const handleChangeFeild = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    if (value === undefined || value === "") {
      setState({ ...state, [name]: value, [name + "_error"]: true });
    } else {
      setState({ ...state, [name]: value, [name + "_error"]: false });
    }
  }
  const handleDob = (event) => {
    setState({ ...state, [DOB__KEY__]: event.target.value });
  }
  const checkError = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (state[NAME__KEY__] == '' || state[NAME__KEY__] == undefined || state[NAME__ERROR__]) {
      if (state[NAME__KEY__] == '' || state[NAME__KEY__] == undefined) {
        setState({ ...state, [NAME__ERROR__]: true });
      } else {
        setState({ ...state, [NAME__ERROR__]: false });
        return false;
      }
    } else if (state[EMAIL__KEY__] == '' || state[EMAIL__KEY__] == undefined || state[EMAIL__ERROR__]) {
      if (state[EMAIL__KEY__] == '' || state[EMAIL__KEY__] == undefined) {
        setState({ ...state, [EMAIL__ERROR__]: true });
      } else {
        setState({ ...state, [EMAIL__ERROR__]: false });
        return false;
      }
    } else if (state[DOB__KEY__] == '' || state[DOB__KEY__] == undefined || state[DOB__ERROR__]) {
      if (state[DOB__KEY__] == '' || state[DOB__KEY__] == undefined) {
        setState({ ...state, [DOB__ERROR__]: true });
      } else {
        setState({ ...state, [DOB__ERROR__]: false });
        return false;
      }
    } else if (state[AVATAR__KEY__] == '' || state[AVATAR__KEY__] == undefined || state[AVATAR__ERROR__]) {
      if (state[AVATAR__KEY__] == '' || state[AVATAR__KEY__] == undefined) {
        setState({ ...state, [AVATAR__ERROR__]: true });
      } else {
        setState({ ...state, [AVATAR__ERROR__]: false });
        return false;
      }
    } else if (state[COUNTRY__KEY__] == '' || state[COUNTRY__KEY__] == undefined || state[COUNTRY__ERROR__]) {
      if (state[COUNTRY__KEY__] == '' || state[COUNTRY__KEY__] == undefined) {
        setState({ ...state, [COUNTRY__ERROR__]: true });
      } else {
        setState({ ...state, [COUNTRY__ERROR__]: false });
        return false;
      }
    } else {
      return true;
    }
  }
  const handleSubmitButton = (event) => {
    const data = {
      [NAME__KEY__]: state[NAME__KEY__],
      [EMAIL__KEY__]: state[EMAIL__KEY__],
      [DOB__KEY__]: state[DOB__KEY__],
      [AVATAR__KEY__]: state[AVATAR__KEY__],
      [COUNTRY__KEY__]: state[COUNTRY__KEY__],
    };
    // saveEmployee(data).then(response => {
    //   console.log("saveEmployee response :", response);
    // }).catch(error => {
    //   console.log("saveEmployee error :", error);
    // });
    console.log("handleSubmitButton", data);
  }
  return (
    // <div className="" style={{ marginLeft: "12px", marginRight: "12px" }}>
    <div className="ms-3 me-3">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>{NAME_LABEL}</Form.Label>
          <Form.Control type="text" onChange={handleChangeFeild} name={NAME__KEY__} value={state[NAME__KEY__]} placeholder={NAME_FIELD_PLACEHOLDER} />

          {state[NAME__ERROR__] ? <>
            <Form.Text>
              {EMPTY_AND_LARGE_NAME_FIELD_ERROR}
            </Form.Text>
          </>
            : false}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>{EMAIL_LABEL}</Form.Label>
          <Form.Control type="email" onChange={handleChangeFeild} name={EMAIL__KEY__} value={state[EMAIL__KEY__]} placeholder={EMAIL_FIELD_PLACEHOLDER} />
          {state[EMAIL__ERROR__] ? <>
            <Form.Text className="text-muted">
              {EMPTY_EMAIL_FIELD_ERROR}
            </Form.Text>
          </>
            : false}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>{DOB_LABLE}</Form.Label>
          <Form.Control type="date" onChange={handleDob} value={state[DOB__KEY__]} name={DOB__KEY__} />
          {state[DOB__ERROR__] ?
            <Form.Text className="text-muted">
              {EMPTY_DOB_ERROR}
            </Form.Text>
            : false}
        </Form.Group>

        <Form.Group className="mb-3">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              {state[AVATAR__KEY__] ?
                <Avatar src={`https://avatars.dicebear.com/api/human/${state[AVATAR__KEY__]}.svg`} />
                :
                AVATAR_LABLE
              }
            </Dropdown.Toggle>
            <DropDownAvatars parentState={state} setParentState={setState} /><br />
            {state[AVATAR__ERROR__] ?
              <Form.Text className="text-muted">
                {SELECT_AVATAR_ERROR}
              </Form.Text>
              : false}
          </Dropdown>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Select name={COUNTRY__KEY__} onChange={handleChangeFeild} value={state[COUNTRY__KEY__]} aria-label="Default select example">
            <option>{COUNTRY_LABLE}</option>
            <option value="ind">India</option>
            <option value="rus">Russia</option>
            <option value="spa">Spain</option>
          </Form.Select>
          {state[COUNTRY__ERROR__] ?
            <Form.Text className="text-muted">
              {SELECT_COUNTRY_ERROR}
            </Form.Text>
            : false}
        </Form.Group>

        <Button_ variant="primary" onClick={(event) => handleSubmitButton(event)} style={{ ...backgroundGradiant(), fontWeight: "bold", width: "100%", }}>
          Submit
        </Button_>
      </Form>
    </div>
  );
}

export default Form_;