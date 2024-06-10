import { useTranslations } from 'next-intl'
import React from 'react'
import { GetProductsExel} from '../components/getProductsExel'
import OrdersMenu from '../components/ordersMenu'
import SideNavBar from '../components/sideNavBar'

const OrdersPage = () => {
    const t = useTranslations("SideNavBar")
    const o = useTranslations("OrdersMenu")
    
    return (
        <div className='flex w-full min-h-screen bg-zinc-100'>
            <SideNavBar
                Promotions={t("Promotions")}
                Orders={t("Orders")}
                Home={t("Home")}
                PaymentDetails={t("PaymentDetails")}
                Products={t("Products")}
                FAQ={t("FAQ")}
                Settings={t("Settings")}
                Feedback={t("Feedback")} />
            <OrdersMenu
            NewOrders={o("New Orders")}
            OrderStatusNew={o("OrderStatusNew")}
            InProgress={o("In Progress")}
            Finished={o("Finished")}
            OrderStatusFinished={o("OrderStatusFinished")}
            Paid={o("Paid")}
            Unpaid={o("Unpaid")}
            paid={o("paid")}
            unpaid={o("unpaid")}
            Total={o("Total")}
            Quantity_short={o("Q-ty")}
            Price={o("Price")}
            Product={o("Product")}/>
        </div>
    )
}
export default OrdersPage