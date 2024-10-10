import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faBell, faGear, faThLarge, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const [tabActive, setTabActive] = React.useState(4);

    const listMenu = [
        {id: 1, label: "Trang chủ", subMenu: false},
        {id: 2, label: "Kế hoạch", subMenu: true},
        {id: 3, label: "Đề nghị mua", subMenu: false},
        {id: 4, label: "Phương án mua", subMenu: true},
        {id: 5, label: "Đơn hàng", subMenu: true},
        {id: 6, label: "Thanh toán", subMenu: true},
        {id: 7, label:  "Biểu mẫu", subMenu: false},
        {id: 8, label:  "Báo cáo", subMenu: false}
    ]

    return (
    <div>
        
        <div className='header'>
            <div className='header-left'>
                <div className='icon-ePro'>
                    <FontAwesomeIcon icon={faCreditCard} />
                    <span className='txtEproc'>eProcurement</span>
                    <div className='vertical-line'></div>
                </div>
                <ul>
                    {listMenu.map((item, index) => <li onClick={() => setTabActive(item.id)} key={index} style={{display: "flex", alignItems: "center", gap: "5px", borderBottom: tabActive === item.id ? "4px solid #6EC2F7" : "none", padding: "11px 0px", cursor: "pointer"}}>
                        <span>{item.label}</span> 
                        <span>{item.subMenu && <FontAwesomeIcon icon={faChevronDown} />}</span>
                        </li>)}
                </ul>
            </div>
            <div className='header-right'>
                <ul class="icon">
                    <li><FontAwesomeIcon icon={faBell} /></li>
                    <li><FontAwesomeIcon icon={faGear} /></li>
                    <li><span class="nickName">EL</span></li>
                    <li><FontAwesomeIcon icon={faThLarge } /></li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Header
