import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faFile } from '@fortawesome/free-solid-svg-icons'

function ProductsPurchase() {
  return (
    <div className="purchase-request-panel">
        <div className='left-purchase'>
            <h2 className='title-purchase'>Hàng hóa cần mua</h2>
            <span>Lựa chọn các hàng hóa đang có nhu cầu cần mua tập trung</span>

            <div className="search-bar-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                <input type="text" placeholder="Tìm kiếm" className="search-input" />
            </div>
            
            <table>
                    <tr>
                        <td className="left-purchase-table"><input type="checkbox"/></td>
                        <td className="left-purchase-table"><p><b>Vật tư hàng hóa</b></p></td>
                        <td className="left-purchase-table"><p><b>Số lượng cần mua</b></p></td>
                    </tr>         
                    <tr>
                        <td className="left-purchase-table"><input type="checkbox"/></td>
                        <td className="left-purchase-table"><p>Bơ, phô mai</p></td>
                        <td className="left-purchase-table"> <p >10,000 cái</p></td>
                    </tr>
                    
                    <tr >
                        <td className="left-purchase-table"><input type="checkbox"/></td>
                        <td className="left-purchase-table"><p>Thực phẩm khô, gia vị</p></td>
                        <td className="left-purchase-table"> <p >10,000 cái</p></td>
                    </tr>

                    <tr >
                        <td className="left-purchase-table"><input type="checkbox"/></td>
                        <td className="left-purchase-table"><p>Thiết bị cân</p></td>
                        <td className="left-purchase-table"> <p >10,000 cái</p></td>
                    </tr>
                    
                    <tr >
                        <td className="left-purchase-table"><input type="checkbox"/></td>
                        <td className="left-purchase-table"><p>Thực phẩm</p></td>
                        <td className="left-purchase-table"> <p >10,000 cái</p></td>
                    </tr>

                    <tr >
                        <td className="left-purchase-table"><input type="checkbox"/></td>
                        <td className="left-purchase-table"><p>Bàn đá, bàn ngang</p></td>
                        <td className="left-purchase-table"> <p >10,000 cái</p></td>
                    </tr>
                </table>
        </div>
        <div className="right-purchase">
            <h2 className='title-purchase'>Đề nghị mua</h2>
            <span>Tạo PAM cho 1 đề nghị</span>

            <div className="search-bar-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                <input type="text" placeholder="Tìm kiếm" className="search-input" />
            </div>

            {/* <div className="search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />    
                <span className='title-search'>Tìm kiếm</span>
            </div> */}

            <table className="tableNeed">
                <tr>
                    <td className="tableNeedBuy"><b>Mã ĐNMS</b></td>
                    <td className="tableNeedBuy"><b>Đơn vị</b></td>
                </tr>

                <tr>
                    <td className="tableNeedBuy"><a href="">PR.2023.000001</a></td>
                    <td className="tableNeedBuy">GGG-NH Gogi Tô Hiệu</td>
                    <td className="tableNeedBuy"><FontAwesomeIcon icon={faFile} /></td>
                </tr>

                <tr>
                    <td className="tableNeedBuy"><a href="">PR.2023.000002</a></td>
                    <td className="tableNeedBuy">GGG-NH Gogi Ng Chí Thanh</td>
                    <td className="tableNeedBuy"><FontAwesomeIcon icon={faFile} /></td>
                </tr>

                <tr>
                    <td className="tableNeedBuy"><a href="">PR.2023.000003</a></td>
                    <td className="tableNeedBuy">GGG-NH Gogi Ng Phong Sắc</td>
                    <td className="tableNeedBuy"><FontAwesomeIcon icon={faFile} /></td>
                </tr>

                <tr>
                    <td className="tableNeedBuy"><a href="">PR.2023.000004</a></td>
                    <td className="tableNeedBuy">GGG-NH Sumo Ng Thị Đinh</td>
                    <td className="tableNeedBuy"><FontAwesomeIcon icon={faFile} /></td>
                </tr>

                <tr>
                    <td className="tableNeedBuy"><a href="">PR.2023.000005</a></td>
                    <td className="tableNeedBuy">GGG-NH Phòng kế hoạch và đào tạo</td>
                    <td className="tableNeedBuy"><FontAwesomeIcon icon={faFile} /></td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default ProductsPurchase
