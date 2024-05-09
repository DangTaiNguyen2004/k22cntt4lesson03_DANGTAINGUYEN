import React, { Component } from 'react';

 class DTNproductlist extends Component {
  render() {
    let {renderProducts} = this.props;
    console.log("Products:",renderProducts);
    let fnstatus = (param)=>{
        if(param===1){
            return 'Active';

        }
        return 'NonActive';

        
    }

    let elememtProduct = renderProducts.map((item,index)=>{
        return(
            <>
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.index}</td>
                    {/* <td>{item.status===1?'Active':'NonActive'}</td> */}
                    <td>
                        {fnstatus(item.status)}
                    </td>
                </tr>
            </>
        )
    })

    return (
      <div>
        <h2>danh sach san pham</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>title</th>
                    <th>status</th>
                </tr>
            </thead>
            <tbody>
                {elememtProduct}
            </tbody>

        </table>
      </div>
    );
  }
}

export default DTNproductlist;