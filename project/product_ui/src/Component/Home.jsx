import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function Home(){

    const [productList,setProductList] = useState([]);

    const init = ()=> {
        fetch("http://localhost:8080/").then(res => res.json()).then(result => {setProductList(result);});
    }

    useEffect(() => {
        fetch("http://localhost:8080/").then(res => res.json()).then(result => {setProductList(result);});
    },[]);

    const deleteProduct = (id) => {
        fetch(("http://localhost:8080/"+id),{
            method : "DELETE"
        }).then(res => init());
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header fs-3 text-center">
                            Product List
                        </div>
                        <div className="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Sr.No.</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productList.map(prod => (
                                    <tr key={prod.id}>
                                        <td>{prod.id}</td>
                                        <td>{prod.productName}</td>
                                        <td>{prod.productDesc}</td>
                                        <td>{prod.price}</td>
                                        <td>{prod.status}</td>
                                        <td>
                                            <Link to={"editProduct/"+prod.id} className="btn btn-sm btn-primary">Edit</Link>
                                            <button className="btn btn-sm btn-danger ms-1" onClick={()=> deleteProduct(prod.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                                
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}