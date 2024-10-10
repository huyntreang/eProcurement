import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faChevronDown,faMagnifyingGlass, faFilter, faPlus, faCircleNotch, faEllipsisVertical, faClock, faRotateRight, faBan} from '@fortawesome/free-solid-svg-icons'

function PurchasePlanList() {
  return (
    <>  
        
        <div className='title-listBuy'>
            <div className='listBuy'>
                <h2 className='titleList'>Danh sách phương án mua</h2>
                <span>Danh sách các Phương án mua(PAM) được tạo ra trên hệ thống mà người dùng được phân quyền truy xuất</span>

                <div className="view">
                    <div className="view-left">
                        <FontAwesomeIcon icon={faEye} />
                        <span>View: View all</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div className="view-right">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <FontAwesomeIcon icon={faFilter} />
                        <div className="createNew">
                            <p>Tạo mới PAM</p>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='table-list'>
            <table>
                <tr className="menu">
                    <td className='title-menuID'>Mã PAM #</td>
                    <td >Tên PAM</td>
                    <td >Người tạo</td>
                    <td >Ngày tạo</td>
                    <td >Loại sự kiện</td>
                    <td >Ngày bắt đầu báo giá</td>
                    <td >Ngày kết thúc báo giá</td>
                    <td>Số lượng phản hồi </td>
                    <td>Trạng thái</td>
                    <td></td>
                </tr>

                <tr className="bodyTable">
                    <td className='menuID'>SE.2023.000001</td>
                    <td>Sự kiện chào giá cá hồi Nauy</td>
                    <td>Nguyễn Văn ABC</td>
                    <td>06-03-2023</td>
                    <td>RFQ</td>
                    <td>06-03-2023</td>
                    <td>06-03-2023</td>
                    <td>0 phản hồi</td>
                    <td>
                        <FontAwesomeIcon icon={faCircleNotch} />
                        <span className='txtStatus'>Mới tạo</span>
                    </td>
                    <td className='iconMore'><FontAwesomeIcon icon={faEllipsisVertical} /></td>
                </tr>

                <tr className="bodyTable">
                    <td className='menuID'>SE.2023.000002</td>
                    <td>Sự kiện đấu thầu lò nướng 2023</td>
                    <td>Nguyễn Văn ABC</td>
                    <td>06-03-2023</td>
                    <td>RFQ</td>
                    <td>06-03-2023</td>
                    <td>06-03-2023</td>
                    <td>0 phản hồi</td>
                    <td>
                        <FontAwesomeIcon icon={faClock} />
                        <span className='txtStatus'>Chờ duyệt sự kiện</span>
                    </td>
                    <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
                </tr>

                <tr className="bodyTable">
                    <td className='menuID'>SE.2023.000002</td>
                    <td>Sự kiện chào giá sản phẩm sữa</td>
                    <td>Nguyễn Văn ABC</td>
                    <td>06-03-2023</td>
                    <td>RFP</td>
                    <td>06-03-2023</td>
                    <td>06-03-2023</td>
                    <td>0 phản hồi</td>
                    <td>
                        <FontAwesomeIcon icon={faRotateRight} />
                        <span className='txtStatus'>Chờ diễn ra</span>
                    </td>
                    <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
                </tr>

                <tr className="bodyTable">
                    <td className='menuID'>SE.2023.000002</td>
                    <td>Sự kiện lò nướng công nghệ</td>
                    <td>Nguyễn Văn ABC</td>
                    <td>06-03-2023</td>
                    <td>RFP</td>
                    <td>06-03-2023</td>
                    <td>06-03-2023</td>
                    <td>0 phản hồi</td>
                    <td>
                        <FontAwesomeIcon icon={faBan} />
                        <span className='txtStatus'>Đã hủy</span>
                    </td>
                    <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
                </tr>
            </table>
        </div>
    </>
  )
}

export default PurchasePlanList
