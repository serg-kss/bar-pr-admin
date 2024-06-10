import { useTranslations } from 'next-intl'
import React from 'react'
import SideNavBar from '../components/sideNavBar'
const PaymentPage = () => {
    const t = useTranslations("SideNavBar")
    return (
        <div className='flex'>
            <SideNavBar
                Promotions={t("Promotions")}
                Orders={t("Orders")}
                Home={t("Home")}
                PaymentDetails={t("PaymentDetails")}
                Products={t("Products")}
                FAQ={t("FAQ")}
                Settings={t("Settings")}
                Feedback={t("Feedback")} />
            <p>paymet page</p>
        </div>
    )
}
export default PaymentPage