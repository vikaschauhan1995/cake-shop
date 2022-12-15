import React, { useState } from 'react';
import { getAge } from '../methods/getAge';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { deleteEmployee } from '../APIUtils';

const PersonItemList = ({ item, handleProfile, fetchPersonList }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const clickDeleteButton = (_id) => {
    console.log('clickDeleteButton');
    deleteEmployee(_id).then(response=>{
    fetchPersonList();
    }).catch(error=>{
      console.log("deleteEmployee error :",error);
    });
  }
  return (
    <div className="ms-2 me-2 row justify-content-center" key={item._id}>
      <div className="person-list-card mt-3 col-lg-5 col-md-6 col-sm-8 col-xs-12">
        <Dropdown className="p-0" onMouseLeave={() => setShowDropdown(false)}
          onMouseOver={() => setShowDropdown(true)}>
          <div onClick={() => handleProfile(item)}>
            <table className="person-list-table">
              <thead>
                <tr>
                  <td><b>Name: </b></td>
                  <td>{item.name}</td>
                </tr>
                <tr>
                  <td><b>Email: </b></td>
                  <td>{item.email}</td>
                </tr>
                <tr>
                  <td><b>Age: </b></td>
                  <td>{getAge(item.dob)} years</td>
                </tr>
                <tr>
                  <td><b>Avatar: </b></td>
                  <td>{item.name}</td>
                </tr>
                <tr>
                  <td><b>Country: </b></td>
                  <td>{item.country}</td>
                </tr>
              </thead>
            </table>
            {/* <b>Name: </b>{item.name}<br />
            <b>Email: </b>{item.email}<br />
            <b>Age: </b>{getAge(item.dob)} years<br />
            <b>Avatar: </b>{item.name}<br />
            <b>Country: </b>{item.name}<br /> */}
          </div>
          <Dropdown.Menu className="person-item-delete-dropdown"
            // show={true}
            show={showDropdown}
            onClick={() => clickDeleteButton(item._id)}
          ><FontAwesomeIcon icon={faTrashAlt} size="lg" /></Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default PersonItemList;