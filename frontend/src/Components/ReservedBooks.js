import React from 'react'
import './ReservedBooks.css'

function ReservedBooks() {
    return (
        <div className='reservedbooks-container'>
            <h className='reservedbooks-title'><b><i>Books On Hold</i></b></h>
            <table className='reservedbooks-table'>
                <tr>
                    <th>Name</th>
                    <th>Book</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>Sreeya</td>
                    <td>Data Structures and Algorithms</td>
                    <td>12/5/2024</td>
                </tr>
                <tr>
                    <td>Nithish</td>
                    <td>Harry Potter- Volume 3</td>
                    <td>10/4/2024</td>
                </tr>
                <tr>
                    <td>Preetham</td>
                    <td>Atmoic Habits</td>
                    <td>15/11/2023</td>
                </tr>
                <tr>
                    <td>Yashwanth</td>
                    <td>Silence</td>
                    <td>02/9/2023</td>
                </tr>
                <tr>
                    <td>Abhijeeth</td>
                    <td>Fundamentals of Algorithms</td>
                    <td>21/3/2024</td>
                </tr>
                <tr>
                    <td>Sathvik</td>
                    <td>Gulliver's Travels</td>
                    <td>02/7/2023</td>
                </tr>
            </table>
        </div>
    )
}

export default ReservedBooks
