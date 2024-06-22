import { useEffect, useState } from "react";
import Button from "../elements/Button";
import Input from "../elements/Input";


const LocalStorage = () => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [address, setAddress] = useState('');
    const [namesList, setNamesList] = useState([]);

    useEffect(() => {
        const storedNames = localStorage.getItem('studentData');
        if (storedNames) {
            setNamesList(JSON.parse(storedNames));
        }
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        const newItem = { name, id, address };
        const updatedNamesList = [...namesList, newItem];
        setNamesList(updatedNamesList);
        localStorage.setItem('studentData', JSON.stringify(updatedNamesList));
        setName("");
        setId("");
        setAddress("");
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'id') {
            setId(value);
        } else if (name === 'address') {
            setAddress(value);
        }
    }


    return (
        <div className="relative min-h-screen flex justify-center items-center">
            <div>
                <Input type="text" placeholder="Enter Your Name" className="border border-primary mb-2" name="name" value={name} onChange={handleChange} />
                <br />

                <input type="text" placeholder="ID" className="input input-bordered w-full max-w-xs mb-2" name="id" value={id} onChange={handleChange} />
                <br />
                <input type="text" placeholder="address" className="input input-bordered w-full max-w-xs mb-2" name="address" value={address} onChange={handleChange} />
                <br />

                <br />
                <Button onClick={handleClick} className="bg-primary rounded-md">Add me</Button>
                <br />
                <br />
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SN</th>
                                <th>Name</th>
                                <th>ID</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {namesList.map((item, index) => (
                                <tr key={index}>
                                    <td>{index +1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.id}</td>
                                    <td>{item.address}</td>
                                    <td>
                                    <button className="btn btn-xs me-2 btn-accent">Edit</button>
                                    <button className="btn btn-xs btn-error">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LocalStorage;