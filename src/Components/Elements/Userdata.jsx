import React, { useEffect, useState } from 'react'
import {db} from '../../firebase'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom'


function Userdata() {
    const [user, setUser] = useState([]);
  const auth = getAuth();
  const id = auth.currentUser;
    // console.log(id.uid);
  const userCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // console.log("Document data:", data);
    };
    getUsers();
  });

  const deleteUser = (id) => {
    // console.log(id);
    deleteDoc(doc(db, "users", id));
    toast('Data Deleted!')
  };
  return (
    <div className='tablebg'>
        <div className="container py-5">
            <div className='mt-5'>

          <Link  to="/login" >
            Back
          </Link>
            </div>
          <div className="d-flex justify-content-center align-items-center">
            <table className="table w-75 mt-5">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Address</th>
                  <th scope="col">Email</th>
                  <th scope="col">Image</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                {user.length ? (
                  user.map((user, id) => {
                    return (
                      <>
                        <tr>
                          <th scope="row">{id + 1}</th>
                          <td>{user.name}</td>
                          <td>{user.contact}</td>
                          <td>{user.address}</td>
                          <td>{user.email}</td>
                          <td><img src={user.img} alt='none'/></td>
                          <td>
                            <button
                              className="btn bg-danger text-white"
                              onClick={() => {
                                deleteUser(user.id);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                          <td>
                            <Link className="btn bg-warning text-white" to={`/update/${user.id}`}>Edit</Link></td>
                        </tr>
                      </>
                    );
                  })
                ) : (
                 <h1>...</h1>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}

export default Userdata