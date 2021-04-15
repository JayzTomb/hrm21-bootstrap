import React, { useState, useEffect } from 'react'
import EmployeeFunction from './EmployeeFunction'
import axios from 'axios';

const ListEmployeeFunction = () => {
    const [data, setData] = useState({ content: [] });

    useEffect(() => {
        (async () => {
            const result = await
                axios('http://localhost:8080/api/v1/employee',
                    {
                        headers: {
                            'Authorization': 'Basic c29hczpzb2Fz'
                        }
                    });
            setData(result.data);
        })();
    }, []);

    return (
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
    );
}

export default ListEmployeeFunction