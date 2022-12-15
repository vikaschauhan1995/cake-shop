import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Person from '../../components/Person';
// import { personList } from '../../static/mock_data';
import { getAge } from '../../methods/getAge';
import { backgroundGradiant } from '../../style/styled_components/backgroundGradiant';
import { buttonStyle } from '../../style/styled_components/buttonStyle';
import '../../style/scss/PersonList.scss';
import { getAllEmployees } from '../../APIUtils';
import PersonItemList from '../../components/PersonItemList';


const PersonList = () => {
  const [personList, setPersonList] = useState([]);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null)
  const handleProfile = (item) => {
    setSelectedPerson(item);
    setIsProfileOpen(!isProfileOpen);
  }
  const removeSelectedObj = () => {
    setSelectedPerson(null);
  }
  const fetchPersonList = () => {
    getAllEmployees().then((response) => {
      setPersonList(response);
    }).catch(error => {
      console.log('getAllEmployees error : ', error);
    });
    console.log('fetchPersonList');
  }
  const list = personList.length > 0 ? personList.map(item => {
    return <PersonItemList item={item} handleProfile={handleProfile} fetchPersonList={fetchPersonList} />
  }) : <div className="text-center" style={{ color: "#666666" }}>
    <h1>No items</h1>
  </div>;
  useEffect(() => {
    // fetchPersonList();
  }, [])
  return (
    <div className="person-list" style={{ bottom: "0px" }}>
      <div className="container-fluid">
        Switch to :
        <Link to="/productList" style={{ ...buttonStyle() }}>
          <button className="btn" style={{ ...backgroundGradiant(), border: '1px solid black', position: 'relative' }}>
            Assignment 2
          </button>
        </Link>
        <button onClick={() => setIsProfileOpen(true)} className="btn btn-primary m-2">Create Person</button>
      </div>
      {
        isProfileOpen ?
          <Person obj={selectedPerson} setIsProfileOpen={setIsProfileOpen} removeSelectedObj={removeSelectedObj} fetchPersonList={fetchPersonList} />
          :
          list
      }
    </div>
  );
}

export default PersonList;