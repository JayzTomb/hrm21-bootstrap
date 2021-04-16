import React, { useState, useEffect } from 'react'
import EmployeeFunction from './EmployeeFunction'
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { InputGroup, FormGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ListEmployeeFunction = () => {
    const [data, setData] = useState({ content: [] });
    const history = useHistory();

    const renderCreateEmployeePage = () => {
        history.push('createEmployee');
    }


    useEffect(() => {
        (async () => {
            const result = await
                axios('http://34.68.247.223:8080/api/v1/employee',
                    {
                        headers: {
                            'Authorization': 'Basic c29hczpzb2Fz'
                        }
                    });
            setData(result.data);
        })();
    }, []);

    return (
        <div>
            <div className="mb-2" style={{ paddingLeft: '40px' }}>
                <Form inline>
                    <FormGroup>
                        <Button variant="outline-primary" className="mr-2" onClick={renderCreateEmployeePage} >Create</Button>
                        <Button variant="outline-primary" className="mr-2" >Update</Button>
                        <Button variant="outline-primary" className="mr-2">Delete</Button>
                        <Form.Control className="mr-2" type="text" placeholder="Find by name" />
                        <InputGroup.Append style={{ display: 'flex' }}>
                            <Button variant="outline-primary" className="mr-2">Search</Button>
                        </InputGroup.Append>
                    </FormGroup>
                </Form>
            </div>

            <div className="scrollbar" id="style-4">
                <ul>
                    {data.content.map(element => (
                        <EmployeeFunction
                            key={element.empId}
                            avatar={element.avatar}
                            fullName={`${element.firstName} ${element.lastName}`}
                            mobile={element.mobile}
                            address={element.address}
                            departmentName={element.department.departmentName}
                            departmentType={element.department.departmentType} />
                    ))}
                </ul>
                <div className="force-overflow"></div>
            </div>
        </div>
    );
}

export default ListEmployeeFunction