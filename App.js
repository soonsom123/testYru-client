import "./App.css";
import { useState } from "react";
import Axios from "axios";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function App() {
  const [	idStudent	, setidStudent	] = useState(0);
  const [fullname, setfullname] = useState("");
  const [lastname, setlastname] = useState("");
  const [idRoom, setidRoom] = useState(0);

  const [idEmt, setidEmt] = useState(0);
  const [nameEmt, setnameEmt] = useState("");
  const [count, setcount] = useState(0);

  const [idBorrow, setidBorrow] = useState(0);
  const [date, setdate] = useState(0);
  const [idStudent1, setidStudent1] = useState(0);
  const [list, setlist] = useState("");
  
  const [idReturn1, setidReturn1] = useState(0);
  const [idBorrow1, setidBorrow1] = useState(0);
  const [date1, setdate1] = useState(0);
  
  
  const [employeeList, setEmployeeList] = useState([]);
  const [employeeList1, setEmployeeList1] = useState([]);

  const getDeEmt = () => {
    Axios.get("http://localhost:3001/deemt").then((response) => {
      setEmployeeList(response.data);
    });
  };

  const getInEmt = () => {
    Axios.get("http://localhost:3001/inemt").then((response) => {
      setEmployeeList1(response.data);
    });
  };

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      idStudent	: 	idStudent	,
      fullname: fullname,
      lastname: lastname,
      idRoom: idRoom,
      
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          idStudent	: idStudent	,
          fullname: fullname,
          lastname: lastname,
          idRoom: idRoom,
          
        },
      ]);
    });
  };

  const addEmt = () => {
    Axios.post("http://localhost:3001/createEmt", {
      idEmt	: 	idEmt	,
      nameEmt: nameEmt,
      count: count,
      
      
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          idEmt	: idEmt	,
          nameEmt: nameEmt,
          count: count,
          
          
        },
      ]);
    });
  };

  const adddeemt = () => {
    Axios.post("http://localhost:3001/createDeEmt", {
      idBorrow	: 	idBorrow	,
      date: date,
      idStudent1: idStudent1,
      list: list,
      
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          idBorrow	: idBorrow	,
          date: date,
          idStudent1: idStudent1,
          list: list,
          
        },
      ]);
    });
  };

  const addinemt = () => {
    Axios.post("http://localhost:3001/createInEmt", {
      idReturn1	: idReturn1	,
      idBorrow1: idBorrow1,
      date1: date1,
      
      
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          idReturn1	: idReturn1	,
          idBorrow1: idBorrow1,
          date1: date1,
                    
        },
      ]);
    });
  };


  const updateEmployee = (idStudent) => {
    Axios.put("http://localhost:3001/update", { idStudent: idStudent, idStudent: idStudent }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.idStudent == idStudent
              ? {
                idStudent: val.idStudent,
                  fullname: val.fullname,
                  lastname: val.lastname,
                  idRoom: val.idRoom,
                  
                  
                }
              : val;
          })
        );
      }
    );
  };
  const updateEmt = (idStudent) => {
    Axios.put("http://localhost:3001/update", { idStudent: idStudent, idStudent: idStudent }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.idStudent == idStudent
              ? {
                idStudent: val.idStudent,
                  fullname: val.fullname,
                  lastname: val.lastname,
                  idRoom: val.idRoom,
                  
                  
                }
              : val;
          })
        );
      }
    );
  };

  const deleteEmployee = (idStudent) => {
    Axios.delete(`http://localhost:3001/delete/${idStudent}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id != idStudent;
        })
      );
    });
  };
  const deleteEmt = (idStudent) => {
    Axios.delete(`http://localhost:3001/delete/${idStudent}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id != idStudent;
        })
      );
    });
  };

  return (
    <div className="App container">
      <h1>เพิ่ม ลบ แก้ไข ข้อมูลนักศึกษา</h1>
      <div className="information">
        <form action="">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              รหัสนักศึกษา:
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="รหัสนักศึกษา"
              onChange={(event) => {
                setidStudent	(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age">ชื่อจริง:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter fullname"
              onChange={(event) => {
                setfullname(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="country">นามสกุล:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter lastname"
              onChange={(event) => {
                setlastname(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Position">หมายเลขห้อง:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter idroom"
              onChange={(event) => {
                setidRoom(event.target.value)
              }}
            />
          </div>
          

          
          <button onClick={addEmployee} class="btn btn-success">
            เพิ่มนักศึกษา
          </button>

          <button onClick={updateEmployee} class="btn btn-success">
              แก้ไขนักศึกษา
          </button>

          <button onClick={deleteEmployee} class="btn btn-success">
            ลบนักศึกษา
          </button>

          <hr />

          <h1>บันทึก แก้ไข ลบ ข้อมูลอุปกรณ์</h1>
          <div className="mb-3">
            <label htmlFor="idEmt">รหัสอุปกรณ์:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter idEmt"
              onChange={(event) => {
                setidEmt(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="setnameEmt">ชื่ออุปกรณ์:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter nameEmt"
              onChange={(event) => {
                setnameEmt(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Position">คงเหลือกี่อัน:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter count"
              onChange={(event) => {
                setcount(event.target.value)
              }}
            />
          </div>

          


          <button onClick={addEmt} class="btn btn-success">
            เพิ่มอุปกรณ์
          </button>
          <button onClick={updateEmt} class="btn btn-success">
            แก้ไขอุปกรณ์
          </button>
          <button onClick={deleteEmt} class="btn btn-success">
            ลบอุปกรณ์
          </button>

          <hr />

          <h2>บันทึกการยืมอุปกรณ์</h2>
          
          <div className="mb-3">
            <label htmlFor="idBorrow">รหัสอ้างอิงการยืม:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter idBorrow"
              onChange={(event) => {
                setidBorrow(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date">วันเวลาที่ยืม:</label>
            <input
              type="date"
              className="form-control"
              placeholder="Enter date"
              onChange={(event) => {
                setdate(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="idStudent">รหัสนักศึกษา:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter idStudent"
              onChange={(event) => {
                setidStudent1(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="list">รายการอุปกรณ์:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter list"
              onChange={(event) => {
                setlist(event.target.value)
              }}
            />
          </div>
          <button onClick={adddeemt} class="btn btn-success">
            บันทึกการยืมอุปกรณ์
          </button>

          <hr />



          <h2>บันทึกการคืนอุปกรณ์</h2>
          <div className="mb-3">
            <label htmlFor="idReturn1">รหัสอ้างอิงการคืน:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter idReturn1"
              onChange={(event) => {
                setidReturn1(event.target.value)
              }}
            />
          </div><div className="mb-3">
            <label htmlFor="idBorrow">รหัสอ้างอิงการยืม:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter idBorrow"
              onChange={(event) => {
                setidBorrow1(event.target.value)
              }}
            />
          </div><div className="mb-3">
            <label htmlFor="date">วัน-เวลา ที่คืน:</label>
            <input
              type="date"
              className="form-control"
              placeholder="Enter date"
              onChange={(event) => {
                setdate1(event.target.value)
              }}
            />
          </div>
          <button onClick={addinemt} class="btn btn-success">
            บันทึกการคืนอุปกรณ์
          </button>




        </form>
      </div>


      
      <hr />
      <div className="employee">
      <button class="btn btn-primary" onClick={getDeEmt}>
         ดูประวัติการยืมย้อนหลัง
      </button>
      <hr />
      <button class="btn btn-primary" onClick={getInEmt}>
         ดูประวัติการคืนย้อนหลัง
      </button>
        <br />
        <br />
        {employeeList.map((val, key) => {
          return (
            <div className="employee card">
              <div className="card-body text-left">
                <p className="card-text">รหัสอ้างอิงการยืม: {val.idBorrow}</p>
                <p className="card-text">เวลา: {val.date}</p>
                <p className="card-text">รหัสนักศึกษา: {val.idStudent}</p>
                <p className="card-text">รายการอุปกรณ์: {val.list}</p>
                
               </div>
              
            </div>
          );
        })}

      {employeeList1.map((val, key) => {
          return (
            <div className="employee card">
              <div className="card-body text-left">
                <p className="card-text">รหัสอ้างอิงการคืน: {val.idReturn}</p>
                <p className="card-text">รหัสอ้างอิงการยืม: {val.idBorrow}</p>
                <p className="card-text">เวลา: {val.date}</p>
                
              </div>
              
            </div>
            

            
          );
        })}

      </div>
    </div>
  );
}

export default App;
